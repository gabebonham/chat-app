import LoginButton from './_components/LoginButton';
import { login } from './_services/LoginService';
import { SignUpPopUp } from './_components/SignUpPopUp';

export default async function LoginPage() {
	return (
		<div className="grid place-items-center h-screen">
			<div className="grid grid-cols-1 grid-rows-2 gap-2 place-items-center ">
				<LoginButton
					action={login}
					addClass="grid grid-cols-3 grid-rows-1 gap-2"
				/>
				<SignUpPopUp />
			</div>
		</div>
	);
}
