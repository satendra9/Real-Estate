import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import 'bootstrap/dist/css/bootstrap.css'
import { Poppins } from 'next/font/google';
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Real Estate App",
  description: "Real Estate Mediator App",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`}>
      <body className={inter.className}>
        
        {children}</body>
    </html>
  );
}
