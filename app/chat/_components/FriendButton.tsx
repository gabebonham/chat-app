'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import AvatarComponent from './AvatarComponent';
import { UserType } from '@/app/_types/UserType';
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
				<AvatarComponent
					addStyle=" "
					img={friend.img}
				/>
				<Label>{friend.username}</Label>
			</Button>
		</div>
	);
}
