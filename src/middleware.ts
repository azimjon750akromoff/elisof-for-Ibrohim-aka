import createMiddleware from "next-intl/middleware";

// Define supported locales
const locales = ["ru", "uz", "en"] as const;

// Create the middleware
const middleware = createMiddleware({
  locales, // Supported locales
  defaultLocale: "en", // Default locale
  localePrefix: "as-needed", // Options: "always", "never", "as-needed"
});

// Export the middleware
export default middleware;

// Middleware configuration
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"], // Ensures middleware runs on all pages
};