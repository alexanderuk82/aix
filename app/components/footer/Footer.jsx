import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo-white.svg";
import style from "./footer.module.scss";
import { GrLinkedin } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className={style.footer}>
			<Link href="/" alt="mainWebsite" className={style.logoFooter}>
				<Image
					src={logo}
					alt="logo AIX"
					fullwidth="true"
					className={style.logoFooter}
				/>
			</Link>
			<div className={style.socials}>
				Join Me on Socials
				<Link
					className={style.social}
					href="https://www.linkedin.com/in/alexandersstudio/"
				>
					<GrLinkedin />
				</Link>
				<Link className={style.social} href="https://github.com/alexanderuk82">
					<FaGithub />
				</Link>
			</div>
			<p className={style.copy}>
				Project Designed and Developed by
				<Link className={style.link} href="https://github.com/alexanderuk82">
					Alexander B.
				</Link>
			</p>
		</footer>
	);
};

export default Footer;
