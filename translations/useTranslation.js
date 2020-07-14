//useTranslation.js
//fajka/https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc

import { useContext } from "react";
import { ComponentContext } from "../context/ComponentContext";
import { defaultLocale } from "./config";
import translations from "./translations";

export default function useTranslation() {
  const { state } = useContext(ComponentContext);
  const { locale } = state;
  // console.log("000/ useTranslation.js/locale=", locale);

  //**** Визначення файлу перекладу ********************************/
  const req = require.context("./mag_veg", false, /.*\.js$/); //папка файлу перекладу
  // console.log("useTranslation.js/req=", req);
  // const appt = `./${app}.js`;//змінна що визначає файл перекладу
  // const appt = `./translations.js`; //файл перекладу
  // console.log("useTranslation.js/ appt1=", appt);
  // const translations = mapTranslations(req, appt).default;
  // console.log("useTranslation.js/trans=", translations);
  //**************************************************************** */
  function t(key) {
    // const locale = "uk";
    // console.log("000/ useTranslation.js/key=", key);
    // if (!translations[locale][key]) {
    //   console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    // }
    return translations[locale][key] || translations[defaultLocale][key] || "";
  }

  return {
    t,
    locale,
  };
}
