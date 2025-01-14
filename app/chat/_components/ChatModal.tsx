'use client';

import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { ChatType } from '@/app/_types/ChatType';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AvatarComponent from './AvatarComponent';
import { UserType } from '@/app/_types/UserType';
import { createChat, getAllMessages } from '../_services/ChatService';
import Chat from '@/app/_models/ChatModel';

export default function ChatModal({
	friend,
	user,
}: {
	friend: UserType;
	user: UserType;
}) {
	const [messages, setMessages] = useState<ChatType[]>([]);
	const inpRef = useRef<any>(null);
	const [flag, toggle] = useState(false);
	const sendMessageHandler = async () => {
		await createChat({
			id: 0,
			msg: inpRef.current.value,
			userId: user.id,
			createdAt: new Date(),
			friendId: friend.id,
		});

		toggle(!flag);
	};
	useEffect(() => {
		const getMessages = async () => {
			const msgs = (await getAllMessages([
				user.id,
				friend.id,
			])) as ChatType[];

			setMessages(msgs);
		};
		getMessages();
	}, [flag]);

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
				<div className=" bg-white/50">
					<ScrollArea className="p-8 h-96">
						{messages.map((m) =>
							m.userId == user.id ? (
								<div
									key={
										m.id
									}
									id={m.id.toString()}
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
					<Input
						className="rounded-none rounded-bl-2xl"
						ref={inpRef}
					/>
					<Button
						onClick={sendMessageHandler}
						className="rounded-none rounded-r-2xl"
					>
						Enviar
					</Button>
				</div>
			</div>
		</div>
	);

	return ReactDOM.createPortal(modalContent, document.body);
}
