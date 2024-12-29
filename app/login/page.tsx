import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
	return (
		<div className="grid place-items-center h-screen">
			<div className="grid grid-cols-1 grid-rows-2 gap-2 place-items-center ">
				<div className="grid grid-cols-3 grid-rows-1 gap-2  ">
					<Input placeholder="Usuário" />
					<Input
						placeholder="Senha"
						className=""
					/>
					<Button className="animate-dance ">
						Log In
					</Button>
				</div>
				<h1 className="cursor-pointer text-white">
					Sign Up
				</h1>
			</div>
		</div>
	);
}
