import "./globals.css";
import "../../assets/fonts/stylesheet.css";
import { locales, Locale } from "../../../i18n.config"; // Import Locale type
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { notFound } from "next/navigation"; // Import notFound
import Navbar from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { getTranslations } from "next-intl/server";



export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "" });

  return {
    title: `${t("ScriptsBeautiful.firsttext")} - Ziyolilar`,
    // description: "desc",
    icons: {
      icon: "/favicon.ico", // Default favicon
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png", // Optional: Apple devices
    },
  };
}; // BU IBROHIM AKANIKI 


// pastdi : chatgpt : 

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: Locale };
// }): Promise<Metadata> {
//   const { locale } = params;

//   if (!locales.includes(locale)) {
//     return {
//       title: "Not Found",
//     };
//   }

//   const t = await getTranslations({ locale, namespace: "SEO" });

//   return {
//     title: `${t("home.title")} | Ziyolilar`,
//     description: t("home.description"),
//     icons: {
//       icon: "/favicon.ico",
//       shortcut: "/favicon.ico",
//       apple: "/apple-touch-icon.png",
//     },
//   };
// }




type Props = {
  children: ReactNode;
  params: { locale: Locale }; // params is not a Promise
};


export default async function RootLayout({ children, params }: Props) {
  const { locale } = params;

  // Validate the locale
  if (!locales.includes(locale)) {
    notFound(); // Return a 404 if the locale is invalid
  }

  // Dynamically load messages for the locale
  let messages;
  try {
    messages = (await import(`../../../locales/${locale}.json`)).default;
  } catch (error) {
    console.error(`Failed to load messages for locale: ${locale}`, error);
    // Provide fallback messages or return a 404
    notFound();
  }

  return (
    <html lang={locale}>
      <body className="font-federo text-[16px] font-normal antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar locale={locale} />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
