import { useState } from "react";
import NewPasswordScreen from "./components/NewPasswordScreen";
import Password from "./components/Password";
import "./style.css";
import generatePassword from "./utils/generatePassword";

function App() {
	const [passwords, setPasswords] = useState([]);
	const [creatingNewPassword, setCreatingNewPassword] = useState(false);

	function addPassword() {
		setPasswords((prevPasswords) => {
			return [
				...prevPasswords,
				{
					name: "jakieshaslo",
					password: generatePassword(),
				},
			];
		});
	}

	function removePassword(password) {
		setPasswords((prevPasswords) => {
			return prevPasswords.filter((x) => x.password !== password);
		});
	}

	const passwordElements = passwords.map((password) => (
		<Password
			removePassword={() => removePassword(password.password)}
			key={password.password}
			password={password.password}
			name={password.name}
		/>
	));

	return (
		<div className="App">
			<h1 className="title">Your Passwords</h1>
			{passwords.length > 0 && passwordElements}
			<button
				className="new-password-button"
				onClick={() => setCreatingNewPassword((prevState) => !prevState)}
			>
				+
			</button>
			{creatingNewPassword && (
				<div
					className="blur"
					onClick={(event) => {
						event.target.className === "blur" &&
							setCreatingNewPassword((prevState) => !prevState);
					}}
				>
					<NewPasswordScreen generatePassword={generatePassword} />
				</div>
			)}
		</div>
	);
}

export default App;
