import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";
import "./globals.css";

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	style: ["normal", "italic"]
});

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
	title: "Forma Studio — Interior Design",
	description:
		"We craft interiors that reflect who you are — thoughtful, considered spaces designed to inspire the way you live and work."
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={`${playfair.variable} ${inter.variable}`}>
			<body>
				<SmoothScrollProvider>{children}</SmoothScrollProvider>
			</body>
		</html>
	);
}
