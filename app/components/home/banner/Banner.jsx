"use client";

import React from "react";
import style from "./banner.module.scss";
import Image from "next/image";
import bannerMobile from "../../../../public/imgHero-mobile.svg";
import bannerDesktop from "../../../../public/imageHero-desktop.svg";
import { useEffect, useState } from "react";

const Banner = () => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		// Set initial value
		handleResize();

		// Add event listener
		window.addEventListener("resize", handleResize);

		// Clean up event listener
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={style.banner}>
			<Image
				src={isDesktop ? bannerDesktop : bannerMobile}
				alt="Banner"
				className={style.bannerImage}
			/>
		</div>
	);
};

export default Banner;
