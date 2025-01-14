'use client';
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from '@/components/ui/sidebar';
import FriendButton from './FriendButton';
import { UserType } from '@/app/_types/UserType';
import { useState } from 'react';
import {
	createChat,
	getAllMessages,
	logoffHandler,
} from '../_services/ChatService';
import { ChatType } from '@/app/_types/ChatType';
import ChatModal from './ChatModal';
import { useRouter } from 'next/navigation';
import { addFriend } from '../_services/UserService';

export default function SideBarComponent({
	friends,
	nonFriends,
	user,
}: {
	nonFriends: UserType[];
	friends: UserType[];
	user: UserType;
}) {
	const router = useRouter();
	const [friendId, setFriendId] = useState<any>();
	const [flag, toggle] = useState(false);

	const chatHandler = async (friend: UserType) => {
		setFriendId(friend.id);
	};
	const logoff = async () => {
		await logoffHandler();
		router.push('/login');
	};
	const addFriendHandler = async (
		userId: number,
		addFriendId: number,
	) => {
		await addFriend(userId, addFriendId);
		router.refresh();
	};
	return (
		<Sidebar>
			<SidebarContent className="pt-4">
				<SidebarGroupContent>
					<SidebarMenu>
						<SidebarMenuItem className="flex justify-center">
							<SidebarMenuButton
								className=" underline w-fit m-0"
								onClick={logoff}
							>
								Logoff
							</SidebarMenuButton>
						</SidebarMenuItem>
					</SidebarMenu>
				</SidebarGroupContent>
				<SidebarGroup>
					<SidebarGroupLabel>
						Amigos
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{friends.map(
								(userf) => (
									<SidebarMenuItem
										key={
											userf.id
										}
									>
										<SidebarMenuButton
											asChild
										>
											<div>
												<FriendButton
													friend={
														userf
													}
													addFriendHandler={
														addFriendHandler
													}
													chatHandler={
														chatHandler
													}
													userId={
														null
													}
												/>
												{friendId ==
													userf.id && (
													<ChatModal
														user={
															user
														}
														friend={
															userf
														}
													/>
												)}
											</div>
										</SidebarMenuButton>
									</SidebarMenuItem>
								),
							)}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
				<SidebarGroupContent>
					<SidebarMenu></SidebarMenu>
				</SidebarGroupContent>
				<SidebarGroup>
					<SidebarGroupLabel>
						Adicionar
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{nonFriends.map(
								(userf) => (
									<SidebarMenuItem
										key={
											userf.id
										}
									>
										<SidebarMenuButton
											asChild
										>
											<div>
												<FriendButton
													friend={
														userf
													}
													addFriendHandler={
														addFriendHandler
													}
													chatHandler={
														chatHandler
													}
													userId={
														user.id
													}
												/>
											</div>
										</SidebarMenuButton>
									</SidebarMenuItem>
								),
							)}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
