import React from "react";
import "./../style.css";
import { FiCopy } from "react-icons/fi";

export default function NewPasswordScreen(props) {
	const newPassword = props.generatePassword();

	return (
		<div className="new-password">
			<form className="form-container">
				<label className="label">Label:</label>
				<input className="input-field" type="text" />
				<div className="label">Password:</div>
				<div>
					<div className="new-password-text">
						{newPassword}
						<FiCopy
							onClick={() => {
								navigator.clipboard.writeText(newPassword);
							}}
							className="new-password-icon"
						/>
					</div>
				</div>
			</form>
		</div>
	);
}
