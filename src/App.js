import { useState } from "react";
import NewPasswordScreen from "./components/NewPasswordScreen";
import Password from "./components/Password";
import "./style.css";

function App() {
	const [passwords, setPasswords] = useState([]);

	return (
		<div className="App">
			<h1 className="title">Your Passwords</h1>
			<Password />
			<button className="new-password-button">+</button>
			{/* <NewPasswordScreen /> */}
		</div>
	);
}

export default App;
