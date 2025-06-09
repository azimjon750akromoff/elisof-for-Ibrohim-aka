"use client";
import { useTranslations } from "next-intl";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useFormSchema } from "@/lib/utils/zodSchema";

const ContactForm = () => {
  const b = useTranslations("Buttons");
  const f = useTranslations("Form");
  const formSchema = useFormSchema(); // Call the function to get the schema

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Pass the returned schema here
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      phone: "",
      description: "",
    },
  });
  

  // Submit Handler
  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="flex justify-center pb-2 font-gilroy">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 w-full max-w-[420px]">
        <div className="space-y-5">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              {...register("name")}
              placeholder={f("name")}
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Surname */}
          <div className="relative">
            <input
              type="text"
              {...register("surname")}
              placeholder={f("lname")}
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal"
            />
            {errors.surname && <p className="text-red-500 text-sm">{errors.surname.message}</p>}
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              {...register("email")}
              placeholder={f("email")}
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div className="relative">
            <PhoneInput
              country={"uz"}
              onChange={(phone) => setValue("phone", phone)}
              inputStyle={{ width: "100%", height: "50px", fontSize: "16px" }}
              buttonStyle={{ background: "transparent", border: "1px solid #CFD3D4" }}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* Description */}
          <div className="relative">
            <textarea
              {...register("description")}
              placeholder={f("descript")}
              rows={4}
              className="text-[#272727] w-full border border-[#CFD3D4] rounded-[8px] py-3 px-4 text-base md:text-[16px] font-normal leading-normal resize-none"
            />
            {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primaryColor rounded-[12px] px-[16px] py-[17px] text-white hover:bg-green-700 transition-colors duration-200"
        >
          {b("sendrequest")}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
