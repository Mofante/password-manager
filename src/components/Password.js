import React, { useState } from "react";
import "./../style.css";

export default function Password(props) {
	const [isActive, setIsActive] = useState(false);

	console.log(props.password);
	return (
		<div
			className="accordion-container"
			onClick={() => setIsActive((prevIsActive) => !prevIsActive)}
		>
			<div
				style={{ borderRadius: isActive && "10rem 10rem 0 0" }}
				className="accordion"
			>
				{props.name}
			</div>
			{isActive && <div className="accordion-content">{props.password}</div>}
		</div>
	);
}
