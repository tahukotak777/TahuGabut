import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tahugabut",
  description: "terbuat karena gabut",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
