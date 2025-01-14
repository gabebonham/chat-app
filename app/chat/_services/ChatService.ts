'use server';

import Chat from '@/app/_models/ChatModel';
import UserHasChat from '@/app/_models/UserHasChatModel';
import User from '@/app/_models/UserModel';
import { ChatType } from '@/app/_types/ChatType';
import { logoff } from '@/app/login/_services/LoginService';
import { cookies } from 'next/headers';

export async function getAllMessages(usersId: number[]) {
	const chats = [
		new Chat(
			1,
			1,
			'1 menssagem do chat 1 de g para f',
			1,
			new Date(),
		),
		new Chat(
			1,
			2,
			'2 menssagem do chat 1 de g para f',
			1,
			new Date(),
		),
		new Chat(
			1,
			3,
			'3 menssagem do chat 1 de f para g',
			2,
			new Date(),
		),
		new Chat(
			1,
			4,
			'4 menssagem do chat 1 de g para f',
			1,
			new Date(),
		),
		new Chat(
			1,
			5,
			'5 menssagem do chat 1 de g para g',
			2,
			new Date(),
		),

		new Chat(
			1,
			6,
			'6 menssagem do chat 1 de f para g',
			2,
			new Date(),
		),
		new Chat(
			1,
			7,
			'7 menssagem do chat 1 de g para f',
			1,
			new Date(),
		),
		new Chat(
			1,
			8,
			'8 menssagem do chat 1 de g para f',
			1,
			new Date(),
		),
	];

	const token = (await cookies()).get('Authorization')?.value;
	return await fetch(
		process.env.BACKEND_URL +
			'/chats/users?userId=' +
			usersId[0] +
			'&friendId=' +
			usersId[1],
		{
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		},
	).then((j) => j.json());
}
export async function createChat(chat: ChatType) {
	const token = (await cookies()).get('Authorization')?.value;
	return await fetch(process.env.BACKEND_URL + '/chats', {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
			Authorization: token as string,
		},
		body: JSON.stringify(chat),
	});
}
export async function logoffHandler() {
	await logoff();
}
