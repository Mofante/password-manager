import React, { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";
import "./../style.css";

export default function Password(props) {
	const [isActive, setIsActive] = useState(false);

	console.log(props.password);

	return (
		<div className="accordion-container">
			<div
				style={{ borderRadius: isActive && "1rem 1rem 0 0" }}
				className="accordion"
				onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
			>
				{props.name}
			</div>
			{isActive && (
				<div className="accordion-content">
					<FiCopy
						onClick={() => {
							navigator.clipboard.writeText(props.password);
						}}
						className="copy-icon"
					/>
					<div className="password-text">{props.password}</div>
					<FaRegTrashAlt
						onClick={props.removePassword}
						className="trash-icon"
					/>
				</div>
			)}
		</div>
	);
}
