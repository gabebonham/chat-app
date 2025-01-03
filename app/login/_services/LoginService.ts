'use server';

import User from '@/app/_models/UserModel';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function login(username: string, password: string) {
	const users = (await fetch(process.env.BACKEND_URL as string).then(
		(r) => r.json(),
	)) as User[];
	const currentUser = users.filter(
		(i) => i.username == username && i.password == password,
	)[0];
	if (currentUser) {
		(await cookies()).set('user', currentUser.id.toString());
		redirect('/chat');
	} else {
		(await cookies()).delete('user');
		revalidatePath('/login');
	}
}

export async function signUp(username: string, password: string, img: string) {
	await fetch(process.env.BACKEND_URL as string, {
		method: 'POST',
		headers: {
			'content-type': 'application/json',
		},
		body: JSON.stringify({
			username: username,
			password: password,
			img: img,
		}),
	});
	return await login(username, password);
}

export async function logoff() {
	(await cookies()).delete('user');
}
