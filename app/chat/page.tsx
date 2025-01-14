import { cookies } from 'next/headers';
import {
	logoffHandler,
	getAllMessages,
	createChat,
} from './_services/ChatService';
import SideBarComponent from './_components/SideBarComponent';
import User from '../_models/UserModel';
import { SidebarProvider } from '@/components/ui/sidebar';
import { UserType } from '../_types/UserType';
import { getAllUsers, getUserById } from './_services/UserService';

export default async function ChatHomePage() {
	const userId = (await cookies()).get('user')?.value as string;
	const user = (await getUserById(parseInt(userId))) as User;
	const allUsers = (await getAllUsers()) as UserType[];
	const nonFriends = allUsers.filter(
		(usr) => !user.friends.includes(usr.id),
	);
	const friends = allUsers.filter((usr) => user.friends.includes(usr.id));
	return (
		<SidebarProvider>
			<SideBarComponent
				friends={friends}
				nonFriends={nonFriends}
				user={user}
			/>
		</SidebarProvider>
	);
}
