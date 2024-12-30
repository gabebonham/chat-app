'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import AvatarComponent from './AvatarComponent';
import ChatModal from './ChatModal';
import { useState } from 'react';
import { getAllMessages } from '../_services/ChatService';
import Chat from '@/app/_models/ChatModel';
import { UserType } from '@/app/_types/UserType';
import { ChatType } from '@/app/_types/ChatType';

export default function FriendButton({
	friend,
	handler,
}: {
	friend: UserType;
	handler: (user: UserType) => void;
}) {
	return (
		<div className="">
			<Button
				onClick={(e) => handler(friend)}
				className="bg-white py-8 w-56 place-items-start"
			>
				<AvatarComponent img={friend.img} />
				<Label>{friend.username}</Label>
			</Button>
		</div>
	);
}
