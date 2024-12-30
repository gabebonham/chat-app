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

export function SignUpPopUp() {
	const usernameRef = useRef<any>(null);
	const passwordRef = useRef<any>(null);
	const [isLoading, setIsLoading] = useState(false);
	const handler = async () => {
		setIsLoading(true);
		await signUp(
			usernameRef.current.value,
			passwordRef.current.value,
		);
	};
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Share</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Share link</DialogTitle>
					<DialogDescription>
						Anyone who has this link will be
						able to view this.
					</DialogDescription>
				</DialogHeader>
				<div className="flex items-center space-x-2">
					<div className="grid flex-1 gap-2">
						<Label
							htmlFor="link"
							className="sr-only"
						>
							Link
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
							className="px-3"
						>
							{isLoading && (
								<LoaderIcon />
							)}
						</Button>
					</div>
				</div>
				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button
							type="button"
							variant="secondary"
						>
							Close
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
