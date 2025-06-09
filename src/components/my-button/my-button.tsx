import { useTranslations } from "next-intl";

function MyButton() {
  const b = useTranslations("Buttons");

  return (
    <div>
      <button className="bg-primaryColor rounded-[5px] text-white py-2 px-4 font-gilroy text-lg font-medium text-center">
        <a href="#contacts">{b("contactuss")}</a>
      </button>
    </div>
  );
}

export default MyButton;
