"use client";

import style from "./modal.module.scss";
import React from "react";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import loginImage from "../../../../public/login.svg";
import registerImage from "../../../../public/register.svg";
import Image from "next/image";

const Modal = ({ title, subheading, type, children, onClose }) => {
	return (
		<div className={style.modalOverlay}>
			<div className={style.modal}>
				<button
					onClick={onClose}
					className={style.closeButton}
					aria-label="Close"
				>
					<IoCloseOutline />
				</button>
				{type === "login" && (
					<Image
						src={loginImage}
						className={style.modalIcon}
						alt="Login"
						width={62}
						height={62}
					/>
				)}
				{type === "register" && (
					<Image
						src={registerImage}
						className={style.modalIcon}
						alt="Register"
						width={62}
						height={62}
					/>
				)}
				<div className={style.top}>
					<h1 className={style.title}>{title}</h1>

					<p className={style.subheading}>{subheading}</p>
					<div className={style.content}>{children}</div>
				</div>

				{type === "login" && (
					<footer className={style.footer}>
						<Link href="/forgot-password" className={`${style.secondary}`}>
							Forgot your password?
						</Link>
						<Link href="/register" className={style.primary}>
							Don't have an account? Sign Up
						</Link>
					</footer>
				)}
				{type === "register" && (
					<footer className={style.footer}>
						<Link href="/login" className={style.primary}>
							Already have an account? Login
						</Link>
					</footer>
				)}
			</div>
		</div>
	);
};

export default Modal;
