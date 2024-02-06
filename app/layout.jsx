import { Poppins } from "next/font/google";
import Loader from "./components/loader";
import "./css/base/base.scss";
import NavBar from "./components/navBar/Navbar";
import Footer from "./components/footer/Footer";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
	title: "AIX - AI for UX",
	description:
		"AIX is a project for UX researchers and designers to get the best result for their work using AI.",
};

export default function RootLayout({ children }) {
	return (
		<ThemeProvider>
			<html lang="en">
				<body className={`${poppins.className}`}>
					<Loader />
					<NavBar />
					{children}
					<Footer />
				</body>
			</html>
		</ThemeProvider>
	);
}
