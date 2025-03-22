import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
    variable: "--font-inter-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Tanmay Kulkarni | Portfolio",
    description: "Welcome to my portfolio!",
    icons: {
        icon: [
            {
                media: "(prefers-color-scheme: light)",
                url: "favicon-light.svg",
                href: "favicon-light.svg",
            },
            {
                media: "(prefers-color-scheme: dark)",
                url: "favicon-dark.svg",
                href: "favicon-dark.svg",
            },
        ],
    }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${interSans.variable} antialiased font-[family-name:var(--font-inter-sans)]`}>
                {children}
            </body>
        </html>
    );
}
