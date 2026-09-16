"use client";
import { IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header/header";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
};

export default function LayoutContent(props: Props) {
  return (
    <html>
      <body className={plexMono.variable} >
        <Header />
        <main>{props.children}</main>
      </body>
    </html>
  );
}
