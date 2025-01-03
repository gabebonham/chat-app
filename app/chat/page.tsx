import { cookies } from 'next/headers';
import { getAllFriends, getUserById } from './_services/ChatService';
import SideBarComponent from './_components/SideBarComponent';
import User from '../_models/UserModel';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { UserType } from '../_types/UserType';

export default async function ChatHomePage() {
	const userId = (await cookies()).get('user')?.value as string;
	const user = (await getUserById(userId)) as User;
	const friends = (await getAllFriends(user.friends)).map((f) => ({
		id: f.id,
		img: f.img,
		username: f.username,
		password: f.password,
	})) as UserType[];
	return (
		<SidebarProvider>
			<SideBarComponent users={friends} user={user} />
		</SidebarProvider>
	);
}
