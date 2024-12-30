'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { LoaderCircle } from 'lucide-react';
import { useRef, useState } from 'react';
export default function LoginButton({
	addClass,
	action,
}: {
	addClass: string;
	action: (username: string, password: string) => void;
}) {
	const usernameRef = useRef<any>(null);
	const passwordRef = useRef<any>(null);
	const [isLoading, setIsLoading] = useState(false);
	const handler = async () => {
		setIsLoading(true);
		await action(
			usernameRef.current.value,
			passwordRef.current.value,
		);
	};
	return (
		<div className={addClass}>
			<Input placeholder="Usuário" ref={usernameRef} />
			<Input placeholder="Senha" ref={passwordRef} />
			<Button className="animate-dance" onClick={handler}>
				{isLoading && (
					<LoaderCircle
						className="animate-spin h-5 w-5"
						viewBox="0 0 24 24"
					>
						{' '}
					</LoaderCircle>
				)}
				Login
			</Button>
		</div>
	);
}
