import { useState } from "react";
import Password from "./components/Password";
import "./style.css";

function App() {
	const [passwords, setPasswords] = useState([]);

	return (
		<div className="App">
			<h1 className="title">Your passwords</h1>
			<Password />
			<button>+</button>
		</div>
	);
}

export default App;
