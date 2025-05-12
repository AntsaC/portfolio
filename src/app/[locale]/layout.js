import { Raleway } from "next/font/google";
import "../globals.css";
import Header from "../_ui/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
const inter = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Antsa Fiderana - Portfolio",
  description: "Portfolio website showcasing my web development projects and skills. Full-stack developer specializing in React, Next.js, and modern web technologies.",
};

export default async function RootLayout({ children, params }) {

  const {locale} = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
