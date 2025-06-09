import { createSharedPathnamesNavigation } from "next-intl/navigation";

// Define supported locales
export const locales = ["ru", "uz", "en"] as const;

// Define the default locale
export const defaultLocale = "en";

// Define the locale prefix behavior
export const localePrefix = "as-needed"; // Options: "always", "never", "as-needed"

// Define a type for the locale
export type Locale = (typeof locales)[number]; // "ru" | "uz" | "en"

// Define human-readable locale names
export const localeNames: Record<Locale, string> = {
  uz: "UZ",
  ru: "RU",
  en: "EN",
};

// Export navigation utilities
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix,
});