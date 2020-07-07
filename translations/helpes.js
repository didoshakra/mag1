//fajka/https://medium.com/swlh/how-to-build-a-multilingual-website-in-next-js-2924eeb462bc
//helpes.js //Визначає чи є в списку локалів(locales) передана

import { locales } from "./config";

export function isLocale(locale) {
  const isLocale = locales.indexOf(locale);
  if (isLocale !== -1) {
    return true; // true, якщо хоть одно співпало
  } else {
    return false;
  }
}
