'use client';
import { Copy, LoaderIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRef, useState } from 'react';
import { signUp } from '../_services/LoginService';
import { CheckBoxAvatar } from './CheckBoxAvatar';

export function SignUpPopUp() {
	const usernameRef = useRef<any>(null);
	const passwordRef = useRef<any>(null);
	const [img, setImg] = useState<string>();
	const [isLoading, setIsLoading] = useState(false);
	const handler = async () => {
		setIsLoading(true);
		await signUp(
			usernameRef.current.value,
			passwordRef.current.value,
			img as string,
		);
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Sign Up</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md flex justify-center flex-col">
				<DialogHeader>
					<DialogTitle>Sign Up</DialogTitle>
					<DialogDescription></DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="flex flex-col justify-center flex-1 gap-2">
						<Label
							htmlFor="link"
							className="sr-only"
						>
							Sign Up
						</Label>
						<Input
							ref={usernameRef}
							placeholder="Usuário"
						/>
						<Input
							ref={passwordRef}
							placeholder="Senha"
						/>

						<Button
							onClick={handler}
							size="sm"
							className="px-3 flex justify-center"
						>
							{isLoading && (
								<LoaderIcon />
							)}
							Sign Up
						</Button>
					</div>
				</div>
				<CheckBoxAvatar setImg={setImg} />
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button
							type="button"
							variant="secondary"
							className="w-full flex justify-center"
						>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
