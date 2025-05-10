import React from "react";
import ContactContainer from "./ContactContainer";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  return (
    <div className="my-14 text-zinc-50 text-center px-4">
      <ContactContainer />
      <p className={"mt-2"}>
        {t("build")} <span className="text-green-400">Next JS</span> and{" "}
        <span className="text-green-400">Tailwind CSS</span>, {t("deployed")}
        Vercel.
      </p>
      <p>{t("copyright")} 2023 Antsa Fiderana. {t("allRightsReserved")}</p>
    </div>
  );
}
