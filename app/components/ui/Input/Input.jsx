"use client";

import React from "react";
import styles from "./input.module.scss";

const Input = ({ label, icon, type = "text", ...props }) => {
	return (
		<div
			className={`${styles.inputContainer} ${
				label ? styles.inputWithLabel : ""
			} ${icon ? styles.inputWithIcon : ""}`}
		>
			{label && <label className={styles.label}>{label}</label>}
			<div className={styles.inputContent}>
				<input type={type} {...props} className={styles.input} />
				{icon && <span className={styles.icon}>{icon}</span>}
			</div>
		</div>
	);
};

export default Input;
