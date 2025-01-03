import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarComponent({
	img,
	addStyle,
}: {
	addStyle: string;
	img: string;
}) {
	return (
		<Avatar className={' ' + addStyle}>
			<AvatarImage src={img} />
			<AvatarFallback>CN</AvatarFallback>
		</Avatar>
	);
}
