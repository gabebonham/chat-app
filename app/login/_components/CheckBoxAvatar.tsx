'use client';
import AvatarComponent from '@/app/chat/_components/AvatarComponent';
import { Checkbox } from '@/components/ui/checkbox';
import { avatarsGlobal } from '@/lib/utils';
import { useRef } from 'react';

export function CheckBoxAvatar({
	setImg,
}: {
	setImg: (value: string) => void;
}) {
	const imgRef = useRef<any>(null);

	return (
		<div className="flex items-center space-x-2">
			{avatarsGlobal.map((a) => (
				<div key={a.id}>
					<AvatarComponent
						img={a.img}
						addStyle=""
					/>
					<Checkbox
						id="terms"
						ref={imgRef}
						onClick={(e) => setImg(a.img)}
					/>
				</div>
			))}
		</div>
	);
}
