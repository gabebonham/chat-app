'use server';
import { UserType } from '@/app/_types/UserType';
import { cookies, headers } from 'next/headers';

export async function getUserById(id: number) {
	const token = (await cookies()).get('Authorization')?.value;
	const user = await fetch(
		process.env.BACKEND_URL + '/users/' + id.toString(),
		{
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		},
	).then((r) => r.json());
	return user;
}

export async function getAllUsers() {
	const token = (await cookies()).get('Authorization')?.value;
	const user = await fetch(process.env.BACKEND_URL + '/users', {
		method: 'GET',
		headers: {
			'content-type': 'application/json',
			Authorization: token as string,
		},
	}).then((r) => r.json());
	return user;
}

export async function addFriend(userId: number, friendId: number) {
	const token = (await cookies()).get('Authorization')?.value;
	return await fetch(
		process.env.BACKEND_URL +
			'/users/friends?userId=' +
			userId +
			'&friendId=' +
			friendId,
		{
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		},
	).then((r) => r.status);
}
