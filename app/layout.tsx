import type { Metadata } from "next";
import { Nunito, Forum } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/widgets/components";
import { cn } from "@/lib/utils";

const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});
const forum = Forum({
  display: "swap",
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-forum",
});

export const metadata: Metadata = {
  title: "Клиника доктора Малькова",
  description: "Стоматология и прочее СЕО",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${nunito.variable} ${forum.variable} flex flex-col min-h-screen font-sans-serif`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
