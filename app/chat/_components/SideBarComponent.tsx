'use client';
import { Calendar, Home, Inbox, Search, Settings } from 'lucide-react';

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
import { getAllMessages, logoffHandler } from '../_services/ChatService';
import { ChatType } from '@/app/_types/ChatType';
import ChatModal from './ChatModal';
import { useRouter } from 'next/navigation';

export default function SideBarComponent({
	users,
	user,
}: {
	users: UserType[];
	user: UserType;
}) {
	const router = useRouter();
	const [friendId, setFriendId] = useState<any>();
	const [messages, setMessages] = useState<ChatType[]>([]);
	const handler = async (friend: UserType) => {
		const oldMessages = (await getAllMessages([
			user.id,
			parseInt(friend.id.toString()),
		])) as ChatType[];
		setMessages(oldMessages);
		setFriendId(friend.id);
	};
	const logoff = async () => {
		await logoffHandler();
		router.push('/login');
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
							{users.map((userf) => (
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
												handler={
													handler
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
													initialMessages={
														messages
													}
												/>
											)}
										</div>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
