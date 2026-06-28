import i18n, { TFunction } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "./en.json";
import esTranslation from "./es.json";

const resources = {
  en: { translation: enTranslation },
  es: { translation: esTranslation },
};

export const init = (overrideLang?: string): Promise<TFunction> => {
  return i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      detection: {
        caches: ["localStorage", "cookie"],
        order: ["localStorage", "cookie", "navigator"],
      },
      fallbackLng: overrideLang || "es",
      interpolation: {
        escapeValue: false,
      },
      lng: overrideLang,
      react: {
        bindI18nStore: "added",
        transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
      },
      resources,
      supportedLngs: ["en", "es"],
    });
};

export const changeLanguage = (lng: string) => {
  const timePerYear = 1000 * 60 * 60 * 24 * 365;
  i18n.changeLanguage(lng);
  const expiresIn = new Date().getTime() + timePerYear;
  document.cookie = `i18next=${lng}; expires=${new Date(
    expiresIn
  ).toUTCString()}; path=/;`;
  localStorage.setItem("i18nextLng", lng);
};
