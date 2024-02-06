"use client";

import React, { useContext, useState, useEffect } from "react";
import Image from "next/image";
import style from "./navbar.module.scss";
import logo from "../../../public/logo.svg";
import logoWhite from "../../../public/logo-white.svg";
import Input from "../ui/Input/Input";
import Button from "../ui/button/Button";
import { MdChevronRight } from "react-icons/md";
import { MdOutlineSearch } from "react-icons/md";
import Link from "next/link";
import Switch from "../ui/switchtheme/Switch";
import Modal from "../ui/modal/Modal";
import { ThemeContext } from "../../context/ThemeContext";

//Responsive button sizes

const ResponsiveButton = () => {
	// Set the initial size
	const [buttonSize, setButtonSize] = useState("md");

	useEffect(() => {
		const handleResize = () => {
			setButtonSize(window.innerWidth < 580 ? "sm" : "md");
		};

		// Set the initial size
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Clean up event listener
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return buttonSize;
};

const Navbar = () => {
	const { theme } = useContext(ThemeContext);
	const buttonSize = ResponsiveButton();

	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

	const handleOpenModal = (modalType) => {
		if (modalType === "login") {
			setIsLoginModalOpen(true);
		} else if (modalType === "signup") {
			setIsSignUpModalOpen(true);
		}
	};

	const handleCloseModal = () => {
		setIsLoginModalOpen(false);
		setIsSignUpModalOpen(false);
	};

	return (
		<nav className={style.navContainer}>
			<div className={style.wrapper}>
				<Link href="/" alt="mainWebsite" className="logoContainer">
					{theme === "dark" ? (
						<Image
							src={logoWhite}
							alt="logo AIX"
							width={"5rem"}
							height={"4.12rem"}
						/>
					) : (
						<Image
							src={logo}
							alt="logo AIX"
							width={"5rem"}
							height={"4.12rem"}
						/>
					)}
				</Link>

				<div className={style.search}>
					<Input
						placeholder="Search interviews"
						type="text"
						icon={<MdOutlineSearch />}
						required
					/>
				</div>

				<div className={style.buttons}>
					{/* // the Switch Theme component here */}

					<Switch />

					{/*  Button actions */}
					<Button
						variant="outline"
						size={buttonSize}
						onClick={() => handleOpenModal("login")}
					>
						Log in
						<MdChevronRight />
					</Button>

					<Button
						variant="default"
						size={buttonSize}
						onClick={() => handleOpenModal("signup")}
					>
						Sign up
						<MdChevronRight />
					</Button>

					{/* Logic  States */}

					{isLoginModalOpen && (
						<Modal
							title="Welcome Back to AIX"
							subheading="Log in to continue discovering insights"
							type="login"
							onClose={handleCloseModal}
						>
							{/* Login form elements here */}
							<Input
								label="Email address"
								placeholder="Enter your email"
								type="email"
							/>
							<Button variant="default" size="md">
								Log in
							</Button>
						</Modal>
					)}
					{isSignUpModalOpen && (
						<Modal
							title="Create Your AIX Account"
							subheading="Join the Future of Text Analysis"
							type="register"
							onClose={handleCloseModal}
						>
							{/* Signup form elements here */}
							<Input
								label="Full Name"
								placeholder="Enter your name"
								type="text"
								required
							/>

							<Button variant="default" size="md" type="submit">
								Register
							</Button>
						</Modal>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
