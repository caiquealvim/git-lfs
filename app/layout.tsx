import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/navbar/Nav";
import ClientProvider from "./components/Hoc/ClientProvider";
import Footer from "./components/Home/Footer";
import ScrolToTop from "./components/Helper/ScrolToTop";

const font = Plus_Jakarta_Sans({ 
  weight:["200","300","400","500","600","700","800"],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Procure seu emprego",
  description: "site de busca de emprego",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClientProvider>
    <html lang="en">
      <body className={font.className}>
        <Nav/>
        {children}
        <Footer/>
        <ScrolToTop/>
        </body>
    </html>
    </ClientProvider>
  );
}
