'use server';

import Chat from '@/app/_models/ChatModel';
import UserHasChat from '@/app/_models/UserHasChatModel';
import User from '@/app/_models/UserModel';
import { ChatType } from '@/app/_types/ChatType';

export async function getUserById(id: string) {
	const user = await fetch(process.env.BACKEND_URL + '/' + id).then((r) =>
		r.json(),
	);
	return user;
}
export async function getAllFriends(ids: number[]) {
	const friends = await Promise.all(
		ids.map(async (f) => (await getUserById(f.toString())) as User),
	);
	return friends;
}
export async function getAllMessages(usersId: number[]) {
	const chatsUser1 = await getUsersChats(usersId[0]);
	const chatsUser2 = await getUsersChats(usersId[1]);
	console.log(chatsUser1);
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
	];
	const chatUser = chatsUser1.filter(
		(c) =>
			chatsUser2.filter((c2) => c2.chatId == c.chatId)
				.length != 0,
	);
	if (chatUser.length == 1) {
		return chats
			.filter((c) => c.chatId == chatUser[0].chatId)
			.map((c) => ({
				id: c.id,
				msg: c.msg,
				userId: c.userId,
				createdAt: c.createdAt,
			})) as ChatType[];
	} else {
		return [];
	}
}

export async function getUsersChats(userId: number) {
	const chats = [new UserHasChat(1, 1, 1), new UserHasChat(2, 2, 1)];
	return chats.filter((c) => c.userId == userId);
}
