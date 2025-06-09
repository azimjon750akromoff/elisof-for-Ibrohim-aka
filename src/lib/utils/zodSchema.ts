import { useTranslations } from "next-intl";
import { z } from "zod";

export const useFormSchema = () => {
  const f = useTranslations("Form.errors");

  return z.object({
    name: z.string()
      .min(3, f("name"))
      .max(50, f("name_max")),

    surname: z.string()
      .min(3, f("lname"))
      .max(50, f("lname_max")),

    email: z.string()
      .email(f("email"))
      .max(50, f("email_max")),

    phone: z.string()
      .regex(/^\+?\d{10,15}$/, f("number"))
      .max(20, f("number_max")),

    description: z.string()
      .min(7, f("descript"))
      .max(500, f("descript_max")),
  });
};
