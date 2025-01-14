'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@radix-ui/react-label';
import AvatarComponent from './AvatarComponent';
import { UserType } from '@/app/_types/UserType';
export default function FriendButton({
	friend,
	userId,
	chatHandler,
	addFriendHandler,
}: {
	friend: UserType;
	userId: any;
	chatHandler: (user: UserType) => void;
	addFriendHandler: (userId: number, friendId: number) => void;
}) {
	return (
		<div className="">
			<Button
				onClick={
					userId == null
						? (e) => chatHandler(friend)
						: (e) =>
								addFriendHandler(
									userId,
									friend.id,
								)
				}
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
