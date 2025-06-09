import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "../../i18n.config"; // Adjust the path as needed

// Import messages statically
import enMessages from "../../locales/en.json";
import ruMessages from "../../locales/ru.json";
import uzMessages from "../../locales/uz.json";

// Map locales to their respective messages
const messagesMap: Record<string, any> = {
  en: enMessages,
  ru: ruMessages,
  uz: uzMessages,
};

export default getRequestConfig(async ({ locale }) => {
  // Default to "en" if locale is undefined
  const resolvedLocale = locale || "en";

  // Validate the locale
  if (!locales.includes(resolvedLocale as typeof locales[number])) {
    notFound(); // Return a 404 if the locale is invalid
  }

  // Return the resolved locale and messages
  return {
    locale: resolvedLocale,
    messages: messagesMap[resolvedLocale] || messagesMap["en"], // Fallback to English if missing
  };
});