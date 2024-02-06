"use client";
import React, { useContext } from "react";
import { LuMoonStar, LuSunMoon } from "react-icons/lu";
import styles from "./switch.module.scss";
import { ThemeContext } from "../../../../app/context/ThemeContext";

const Switch = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button
			onClick={toggleTheme}
			className={`${styles.toggleButton} ${
				theme === "dark" ? styles.darkMode : styles.lightMode
			}`}
		>
			{theme === "dark" ? <LuSunMoon /> : <LuMoonStar />}
		</button>
	);
};

export default Switch;
