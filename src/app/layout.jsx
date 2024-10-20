import localFont from "next/font/local";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Watermark from "@/components/elvxk/watermark";
import elvxk from "@/components/elvxk/elvxk";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "LYT Gadget Tulungagung",
  description: "LYT Gadget Tulungagung",
};

export default function RootLayout({ children }) {
  console.info(elvxk);
  return (
    <html lang="en" data-theme="cupcake">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Watermark />
        <ClerkProvider>{children}</ClerkProvider>
      </body>
    </html>
  );
}
