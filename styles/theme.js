//*** */
//20080425-добавлені шрифти //Amatic SC,Poppins,Lora-https://fonts.googleapis.com/ з шаблону
// _do
export const themes = ["light", "dark", "other"];

export const themesNames = {
  light: "Світла",
  dark: "Темна",
  other: "Інша",
};

//Для тем будемо міняти тільки кольори(theme.colors.)

export const themeDark = {
  fontFamily: {
    sansSerif: "Poppins-Regular,Arial,sans-serif", //звичайні шрифти без засічок
    serif: "Lora-Regular,Georgia, serif", //звичайні шрифти з засічками
    mimicHand: "AmaticSC-Regular, cursive", //шрифти, що імітують почерк
    fixedWidth: "MajorMonoDisplay-Regular, monospace", //Всі гліфи мають однакову фіксовану ширину
    decorative: "Trattatello,fantasy", //декоративні шрифти, для назв
  },
  colors: {
    text: "rgba(65,69,69,1)", //чорний
    background: "rgba(65,69,69,1)",

    headTapeBackground: "rgba(65,69,69,1)",
    headTapeText: "#fff", //білий
    headTapeTextHover: "#fff", //білий/
    headTapeTextBackgroundHover: "rgba(65,69,69,1)",

    headBackground: "rgba(65,69,69,1)",
    headText: "#fff", //білий
    headTextHover: "rgba(23,25,25,1)",
    headTextBackgroundHover: "#fff", //білий

    headMobileBackground: "rgba(65,69,69,1)",
    headMobileText: "#fff", //білий
    headMobileIcon: "#fff", //білий,
    headMobileTextHover: "rgba(23,25,25,0.9)",
    headMobileTextBackgroundHover: "#fff", //білий

    headIcon: "#fff", //білий
    headIconHover: "rgba(23,25,25,1)",
    headIconBackgroundHover: "#fff", //білий
    headIconBorderWidht: "0px",
    headIconBorderStyle: "dotted",

    headMenuBackground: "#fff", //білий
    headMenuBackgroundActive: "#f64532",
    headMenuBackgroundGorizActive: "#f64532",

    paperBackground: "rgba(65,69,69,1)",
    paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.5)",
    paperHeadBackground: "rgba(64,61,51,1)",
    paperHeadBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",

    cardBackground: "rgba(64,61,51,0.6)",
    cardBoxShadow: "2px 2px 2px rgba(23,25,25,0.9)",
  },
};

export const themeLith = {
  fontFamily: {
    sansSerif: "Poppins-Regular,Arial,sans-serif", //звичайні шрифти без засічок
    serif: "Lora-Regular,Georgia, serif", //звичайні шрифти з засічками
    mimicHand: "AmaticSC-Regular, cursive", //шрифти, що імітують почерк
    fixedWidth: "MajorMonoDisplay-Regular, monospace", //Всі гліфи мають однакову фіксовану ширину
    decorative: "Trattatello,fantasy", //декоративні шрифти, для назв
  },
  colors: {
    text: "#060214",
    background: "#fff", //білий/
    headTapeBackground: "#82AE46",
    headTapeText: "#fff",
    headLogoText: "#82AE46",
    headLogoTextHover: "rgba(65,69,69,1)",
    headTapeTextHover: "#fff", //білий/
    headTapeTextBackgroundHover: "rgba(65,69,69,1)",

    headBackground: "#fff", //білий
    headText: "rgba(65,69,69,1)",
    headTextHover: "#fff", //білий/
    headTextBackgroundHover: "rgba(65,69,69,1)",

    headMobileBackground: "rgba(65,69,69,1)",
    headMobileText: "#fff", //білий
    headMobileIcon: "#fff", //білий,
    headMobileTextHover: "rgba(23,25,25,0.9)",
    headMobileTextBackgroundHover: "#fff", //білий

    headIcon: "rgba(23,25,25,1)",
    headIconHover: "#fff", //білий
    headIconBackgroundHover: "rgba(65,69,69,1)",
    headIconBorderWidht: "0px",
    headIconBorderStyle: "dotted",
    headMenuBackground: "rgba(21,103,179,0.9)",
    headMenuBackgroundActive: "#f6d142",
    headMenuBackgroundGorizActive: "#f6d142",

    paperBackground: "rgb(223, 222, 222)",
    paperBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
    paperHeadBackground: "rgba(187,190,190,1)",
    paperHeadBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",

    cardBackground: "rgba(187,190,190,0.5)",
    cardBoxShadow: "2px 2px 2px rgba(0, 0, 0, 0.6)",
  },
};
