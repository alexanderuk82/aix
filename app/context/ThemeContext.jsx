"use client";

import React, { createContext, useState, useEffect } from "react";
import "../css/colours/colours.scss"; // Import your SCSS file

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState("light");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme") ?? "light";
		setTheme(storedTheme);
		applyTheme(storedTheme);
	}, []);

	const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.classList.toggle('dark', newTheme === 'dark');
  };
  

	const toggleTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		localStorage.setItem("theme", newTheme);
		setTheme(newTheme);
		applyTheme(newTheme);
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
