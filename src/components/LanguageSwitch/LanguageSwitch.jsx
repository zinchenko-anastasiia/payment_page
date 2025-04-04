import { useState } from "react";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("UKR");

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="language-switch">
      <span
        onClick={() => toggleLanguage("ENG")}
        className={language === "ENG" ? "active" : "inactive"}
      >
        Eng
      </span>
      <span
        onClick={() => toggleLanguage("UKR")}
        className={language === "UKR" ? "active" : "inactive"}
      >
        Укр
      </span>
    </div>
  );
};

export default LanguageSwitch;
