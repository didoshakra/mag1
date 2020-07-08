//LocaleSwitcherDroop.js
//Саме випадаюче меню мови

import React, { useContext, useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { locales, localesList } from "../../translations/config";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";

const LocaleSwitcherDroop = (props) => {
  const router = useRouter();
  const { state } = useContext(ComponentContext);
  const { theme, locale } = state;
  // console.log("LocaleSwitcherDroop/props.langMenuOpen=", props.langMenuOpen);

  //Зміна locfle/ React.useCallback!!!???
  const handleLocaleChange = React.useCallback(
    (e) => {
      props.setLangMenuOpen(false); //Закриваєм меню
      //langMenuToggle(); //Закриває меню
      const newLocale = localesList[e.currentTarget.dataset.index].loc;
      // console.log("LocaleSwitcher.js/newLocale=", newLocale);
      const regex = new RegExp(`^/(${locales.join("|")})`);
      router.push(
        router.pathname,
        router.asPath.replace(regex, `/${newLocale}`)
      );
    },
    [router]
  );

  const renderMenu = () => {
    return localesList.map((item, index) => {
      return (
        <li
          data-index={index} //data-ХХ->Для передачі даних в e.currentTarget.dataset.XX
          className={
            item.loc === locale
              ? "localeSwitcherDroop__menu__item--active"
              : "localeSwitcherDroop__menu__item"
          }
          onClick={handleLocaleChange}
        >
          <a className="localeSwitcherDroop__menu__item-a">{item.loc}</a>
          <img
            className="localeSwitcherDroop__menu__item-a"
            src={item.flag}
            alert="flag"
          />
          <a className="localeSwitcherDroop__menu__item-a">{item.name}</a>
        </li>
      );
    });
  };

  return (
    <div className="localeSwitcherDroop">
      <ul className="localeSwitcherDroop__menu">{renderMenu()}</ul>
      <style jsx global>{`
        .localeSwitcherDroop__menu__item {
          margin: 0;
          padding: 5px 10px;
          font-size: 18px;
          font-weight: 100;
          font-family: ${theme.fontFamily.serif};
          list-style-type: none;
          text-decoration: none;
          color: ${theme.colors.headText};
          background: ${theme.colors.headBackground};
        }
        .localeSwitcherDroop__menu__item:hover {
            background: ${theme.colors.headText};
          cursor: pointer;
        }
        .localeSwitcherDroop__menu__item:hover a {
          color: ${theme.colors.headBackground};
            background: ${theme.colors.headText};
          cursor: pointer;
        }

        .localeSwitcherDroop__menu__item--active {
          margin: 0;
          padding: 5px 10px;
          display: block;
          font-family: ${theme.fontFamily.serif};
          font-size: 18px; //Рукавичка
          font-weight: 100; //грубина
          color: ${theme.colors.headTextHover};
          background: ${theme.colors.headMenuBackgroundActive};
        }
        .localeSwitcherDroop__menu__item--active:hover {
          //background: ${theme.colors.headText};
          cursor: pointer;
        }
        .localeSwitcherDroop__menu__item--active:hover a {
          color: ${theme.colors.headBackground};
            //background: ${theme.colors.headText};
          cursor: pointer;
        }

        .localeSwitcherDroop__menu__item-a {
          margin-left: 5px;
      `}</style>
      <style jsx>{`
        .localeSwitcherDroop {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .localeSwitcherDroop__menu {
          //плавно проявляється (opacity 0.5s)
          position: absolute; //Щоб працювали(top,bottom,left,right) материнський блок обовязково = position: relative;
          display: inline-block; //-(сам)Блок по ширині контенту
          //display: block; //+(з float: left;) Блок по ширині контенту
          //float: left; //+(з display: block)Блок по ширині контенту
          padding: 0;
          margin: 0;
          min-width: 180px; //якщо не працює display: inline-block(переносить слова)
          //bottom: -220px; //Від нижнього краю обох об'єктів()((+)вверх,(-)вниз)
          top: -0px; //Від верхнього краю обох об'єктів((+)вниз,(-)вверх)
          right: 0px;
          border-radius: 5px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: ${props.langMenuOpen ? "1" : "0"};
          z-index: ${props.langMenuOpen ? "1" : "-2"};
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
    </div>
  );
};

export default LocaleSwitcherDroop;
