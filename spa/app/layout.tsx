import type { Metadata } from "next";
import "./globals.css";
import MainPage from "./pages/main/main-page";

export const metadata: Metadata = {
  title: "Marcin's SPA",
  description: "Generated by create next app",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout() {
  return (
    <html lang="en" >
      		<head>
			<link rel='icon' href='/favicon.ico' />
		</head>
      <body>
        <MainPage />
      </body>
    </html>
  );
}
