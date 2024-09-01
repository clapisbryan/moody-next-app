import { Inter, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const opensans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Moody",
  description: "Track your daily mood",
};

export default function RootLayout({ children }) {
  const header = (<Header />)

  const footer = (
    <Footer />
  )

  return (
    <html lang="en" data-theme="light">
      <body className={'w-full mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 ' + opensans.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
