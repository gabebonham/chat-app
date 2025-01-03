'use client';

import React from 'react';
import ReactDOM from 'react-dom';
import { ChatType } from '@/app/_types/ChatType';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import User from '@/app/_models/UserModel';
import { Avatar } from '@/components/ui/avatar';
import AvatarComponent from './AvatarComponent';
import { UserType } from '@/app/_types/UserType';
import { Separator } from '@/components/ui/separator';

export default function ChatModal({
	initialMessages,
	friend,
	user,
}: {
	initialMessages: ChatType[];
	friend: UserType;
	user: UserType;
}) {
	const modalContent = (
		<div className="animate-zoomIn absolute inset-0 ml-64 p-12">
			<div className="rounded-t-2xl  ">
				<div className="bg-white rounded-t-2xl p-2 flex items-center">
					<AvatarComponent
						addStyle=" mr-4 "
						img={friend.img}
					/>{' '}
					{friend.username}
				</div>
				<div className="p-8 bg-white/50">
					<ScrollArea className="h-96">
						{initialMessages.map((m) =>
							m.userId == user.id ? (
								<div
									key={
										m.id
									}
									className="justify-self-end"
								>
									<AvatarComponent
										addStyle="flex justify-self-end"
										img={
											user.img
										}
									/>
									<p className="flex justify-self-end">
										{
											m.msg
										}
									</p>
								</div>
							) : (
								<div key={m.id}>
									<AvatarComponent
										addStyle=""
										img={
											friend.img
										}
									/>
									<p>
										{
											m.msg
										}
									</p>
								</div>
							),
						)}
					</ScrollArea>
				</div>
				<div className="rounded-b-2xl mt-4 flex ">
					<Input className="rounded-none rounded-bl-2xl" />
					<Button className="rounded-none rounded-r-2xl">
						Enviar
					</Button>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, document.body);
}
