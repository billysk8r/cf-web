import type { Metadata } from "next";
import { Inter, Marcellus } from "next/font/google";
import "./globals.css";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const marcellus = Marcellus({
	variable: "--font-marcellus",
	weight: "400",
	subsets: ["latin"],
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
			<body className={`${inter.variable} ${marcellus.variable} font-sans antialiased bg-surface min-h-screen flex flex-col`}>
				{children}
			</body>
		</html>
	);
}
