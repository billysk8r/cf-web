import type { Metadata } from "next";
import { Inter, Marcellus } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const marcellus = Marcellus({
	variable: "--font-marcellus",
	weight: "400",
	subsets: ["latin"],
});

const donau = localFont({
	src: "../fonts/Donau.otf",
	variable: "--font-donau",
});

export const metadata: Metadata = {
	title: "Central Coast Chamber Choir",
	description: "A chamber ensemble of I Cantori di Carmel led by conductor Daniel Henriks.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${inter.variable} ${marcellus.variable} ${donau.variable} font-sans antialiased bg-surface min-h-screen flex flex-col`}>
				<Navbar />
				<main className="flex-grow pt-20">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
