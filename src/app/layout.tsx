import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Header from "./components/header";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "10 Minute School",
  description: "Bangladesh's No.1 EdTech Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col antialiased",
          roboto.className,
        )}
      >
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
