"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function Loader() {
	const path = usePathname();

	useEffect(() => {
		import("preline/preline");
	}, []);

	useEffect(() => {
		setTimeout(() => {
			if (window.HSStaticMethods) {
				window.HSStaticMethods.autoInit();
			}
		}, 100);
	}, [path]);

	return null;
}
