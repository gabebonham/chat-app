import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
export const avatarsGlobal = [
	{ img: 'boyAvatar.jpg', id: 1 },
	{ img: 'girlAvatar.jpg', id: 2 },
	{ img: 'boyAvatar2.png', id: 3 },
];
