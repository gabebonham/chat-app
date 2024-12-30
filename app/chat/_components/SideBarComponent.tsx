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
import Image from 'next/image';
import User from '@/app/_models/UserModel';
import AvatarComponent from './AvatarComponent';
import FriendButton from './FriendButton';
import { UserType } from '@/app/_types/UserType';
import { use, useState } from 'react';
import { getAllMessages } from '../_services/ChatService';
import { ChatType } from '@/app/_types/ChatType';
import ChatModal from './ChatModal';
import { Label } from '@radix-ui/react-label';
import { Button } from '@/components/ui/button';

export default function SideBarComponent({
	users,
	userId,
}: {
	users: UserType[];
	userId: number;
}) {
	const [friendId, setFriendId] = useState<any>();
	const [messages, setMessages] = useState<ChatType[]>([]);
	const handler = async (friend: UserType) => {
		const oldMessages = (await getAllMessages([
			userId,
			parseInt(friend.id.toString()),
		])) as ChatType[];
		setMessages(oldMessages);
		setFriendId(friend.id);
	};
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>
						Amigos
					</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{users.map((user) => (
								<SidebarMenuItem
									key={
										user.id
									}
								>
									<SidebarMenuButton
										asChild
									>
										<div>
											<FriendButton
												friend={
													user
												}
												handler={
													handler
												}
											/>
											{friendId ==
												user.id && (
												<ChatModal
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
