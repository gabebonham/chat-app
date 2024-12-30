import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarComponent({ img }: { img: string }) {
	return (
		<Avatar>
			<AvatarImage src={img} />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
}
