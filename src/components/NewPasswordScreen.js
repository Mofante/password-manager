import React, { useContext, useState } from "react";
import "./../style.css";
import { FiCopy } from "react-icons/fi";

export default function NewPasswordScreen(props) {
	const [newLabel, setNewLabel] = useState("");

	function handleChange(e) {
		setNewLabel(e.target.value);
	}

	return (
		<div className="new-password">
			<form
				onSubmit={(event) => event.preventDefault()}
				className="form-container"
			>
				<label className="label">Label:</label>
				<input
					autoFocus
					onChange={handleChange}
					value={newLabel}
					className="input-field"
					type="text"
				/>
				<div className="label">Password:</div>
				<div>
					<div className="new-password-text">
						{props.newPassword}
						<FiCopy
							onClick={() => {
								navigator.clipboard.writeText(props.newPassword);
							}}
							className="new-password-icon"
						/>
					</div>
				</div>
				<button
					className="add-button"
					onClick={() => {
						props.addPassword(props.newPassword, newLabel);
						props.closeWindow();
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}
