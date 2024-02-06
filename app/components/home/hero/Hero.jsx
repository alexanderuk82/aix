"use client";

import React, { useContext } from "react";
import style from "./hero.module.scss";
import Button from "../../ui/button/Button";
import { MdChevronRight } from "react-icons/md";
import { ThemeContext } from "../../../context/ThemeContext";
import pie from "../../../../public/Pie-chart.svg";
import Image from "next/image";

const Hero = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`${style.hero} ${theme === "dark" ? `${style.dark}` : ""}`}>
			<div className={style.heroContainer}>
				<h1 className={style.h1}>
					Boost Your Research and{" "}
					<span className={style.heroHighlight}>Streamline with Precision</span>
				</h1>
				<p className={style.heroText}>
					Unlock UX Insights: Effortlessly Reveal Hidden Needs & Prospects with
					AI.
				</p>
				<Button variant="default" size="md">
					Get Started
					<MdChevronRight />
				</Button>
				<div className={style.pieChart}>
					<Image src={pie} alt="pieChart" width={40} height={40} />
					<p className={`${theme === "dark" ? `${style.textDark}` : ""}`}>
						Elevate Your Productivity and Extract the Best from Your Research
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
