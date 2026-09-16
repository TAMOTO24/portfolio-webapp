"use client";

import Header from "@/components/Header/header";
import "./globals.css";

type Props = {
  children: React.ReactNode;
};

export default function LayoutContent(props: Props) {
  return (
    <html>
      <body>
        <Header />
        <main>{props.children}</main>
      </body>
    </html>
  );
}
