'use server';

import User from '@/app/_models/UserModel';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';

type tokenType = {
	usrId: string;
};
export async function login(username: string, password: string) {
	const token = await fetch(process.env.BACKEND_URL + '/login', {
		method: 'POST',
		body: JSON.stringify({ username, password }),
		headers: { 'Content-Type': 'application/json' },
	}).then((r) => r.json());

	if (token) {
		const parsedToken = jwt.verify(
			token.token,
			process.env.JWT_KEY as string,
		) as tokenType;
		(await cookies()).set('user', parsedToken.usrId);
		(await cookies()).set('Authorization', token.token);
		redirect('/chat');
	} else {
		(await cookies()).delete('Authorization');
		revalidatePath('/login');
	}
}

export async function signUp(username: string, password: string, img: string) {
	await fetch(process.env.BACKEND_URL + '/signUp', {
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
	(await cookies()).delete('Authorization');
}
