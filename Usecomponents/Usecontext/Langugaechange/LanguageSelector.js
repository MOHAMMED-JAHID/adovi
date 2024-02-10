import React, { useContext } from "react";
import { LanguageContext } from "./LanguageProvider";

const LanguageSelector = () => {
  const { language, switchLanguage } = useContext(LanguageContext);

  return (
    <div>
      <h2>Language Selector</h2>
      <button onClick={() => switchLanguage("en")}>English</button>
      <button onClick={() => switchLanguage("fr")}>French</button>
      <p>Current Language: {language}</p>
    </div>
  );
};

export default LanguageSelector;
