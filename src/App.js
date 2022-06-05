import { useState } from "react";
import NewPasswordScreen from "./components/NewPasswordScreen";
import Password from "./components/Password";
import "./style.css";

function App() {
	const [passwords, setPasswords] = useState([]);

	function addPassword() {
		setPasswords((prevPasswords) => {
			return [
				...prevPasswords,
				{
					name: "xD",
					password: "",
				},
			];
		});
	}

	const passwordElements = passwords.map((password) => (
		<Password name={password.name} />
	));

	return (
		<div className="App">
			<h1 className="title">Your Passwords</h1>
			{passwords.length > 0 && passwordElements}
			<button className="new-password-button" onClick={addPassword}>
				+
			</button>
			{/* <NewPasswordScreen /> */}
		</div>
	);
}

export default App;
