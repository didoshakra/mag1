//HeaderSetingDroop.js
//Випадаюче шестерня меню без  menuList

import React, { useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  faGlobe,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
import LocaleSwitcherDroop from "../all/LocaleSwitcherDroop";

const HeaderSetingDroop = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, themeTypeLight } = state;
  const [setingMenuOpen, setSetingMenuOpen] = React.useState(false);
  const [appMenuOpen, setAppMenuOpen] = React.useState(false);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  //Для клацання поза обєктом
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        // alert("Ти клацнув поза мною!");
        // MenuToggle(); //Погано-спрацьвує від іншого обєкту
        if (setingMenuOpen) {
          setSetingMenuOpen(false); //Закриваєм меню Seting
        }
        if (langMenuOpen) {
          setLangMenuOpen(false); //Закриваєм меню Lang
        }
        if (appMenuOpen) {
          setAppMenuOpen(false); //Закриваєм меню App
        }
      }
    }
    useEffect(() => {
      // Прив’яжіть прослуховувач події
      // document.addEventListener("mousedown", handleClickOutside);//натиснули / віджали кнопку миші на елементі.
      document.addEventListener("scroll", handleClickOutside); //Для скролу
      document.addEventListener("click", handleClickOutside, false); //Кликнули на елемент лівою кнопкою миші (на пристроях з сенсорними екранами воно відбувається при торканні).
      return () => {
        // Від’єднайте слухача події під час очищення
        // document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("scroll", handleClickOutside);
        document.removeEventListener("click", handleClickOutside, false);
      };
    });
  }

  const setingMenuToggle = () => {
    setSetingMenuOpen(!setingMenuOpen);
    if (langMenuOpen) {
      setLangMenuOpen(false); //Закриваєм меню Lang
    }
    if (appMenuOpen) {
      setAppMenuOpen(false); //Закриваєм меню App
    }
    // console.log("setingMenuToggle/setingMenuOpen=", setingMenuOpen);
  };

  const themeMenuToggle = () => {
    var newTheme = "light";
    if (themeTypeLight) {
      newTheme = "dark";
    }
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
    //
    if (langMenuOpen) {
      setLangMenuOpen(false); //Закриваєм меню Lang
    }
    if (appMenuOpen) {
      setAppMenuOpen(false); //Закриваєм меню App
    }
  };

  const langMenuOpenToggle = () => {
    setLangMenuOpen(!langMenuOpen);
    // console.log("HeaderSetingDroop.js/langMenuOpenTagle=", appMenuOpen);
    if (appMenuOpen) {
      setAppMenuOpen(false); //Закриваєм меню App
    }
  };

  const appMenuToggle = () => {
    setAppMenuOpen(!appMenuOpen);
    // console.log("appMenuToggle/appMenuOpen=", appMenuOpen);
    if (langMenuOpen) {
      setLangMenuOpen(false); //Закриваєм меню Lang
    }
  };

  return (
    <div ref={wrapperRef} className="headerSetingDroop">
      {/* іконка seting*/}
      <a className="headerSetingDroop__icon" onClick={setingMenuToggle}>
        <FontAwesomeIcon icon={faCog} title={t("headerMenu_iconTitleSeting")} />
      </a>
      {/* App меню*/}
      {/* {appMenuOpen ? <HeaderAppMenu /> : ""} */}
      {/* список головного меню */}
      <ul className="headerSetingDroop__dropdown">
        <li
          className="headerSetingDroop__dropdown__item"
          onClick={themeMenuToggle}
        >
          <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} />
          {/* <a className="headerSetingDroop__dropdown__item__a">Теми</a> */}
          <a>Теми</a>
        </li>
        <li
          className="headerSetingDroop__dropdown__item"
          onClick={langMenuOpenToggle}
        >
          {/* // Від цього об'єкту відразовуються відступи в випадаючих меню  */}
          <LocaleSwitcherDroop
            langMenuOpen={langMenuOpen}
            setLangMenuOpen={setLangMenuOpen}
          />
          <FontAwesomeIcon icon={faGlobe} />
          {/* <a className="headerSetingDroop__dropdown__item__a">Мови</a> */}
          <a>Мови</a>
        </li>
      </ul>
      <style jsx>{`
        .headerSetingDroop {
          position: relative;
          margin: 0;
          padding: 0;
        }
        .headerSetingDroop__icon {
          margin: 0;
          margin-right: 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.headMobileIcon};
          background: ${theme.colors.headMobileBackground};
          border: ${theme.colors.headIconBorderWidht}
            ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          width: 36px;
          height: 36px;
        }
        .headerSetingDroop__icon:hover {
          //color: ${theme.colors.headIconHover};
          //background: ${theme.colors.headIconBackgroundHover};
          color: ${theme.colors.headMobileBackground};
          background: ${theme.colors.headMobileIcon};
          cursor: pointer;
        }
        .headerSetingDroop__dropdown {
          position: absolute;
          display: block;
          float: left;
          padding: 0;
          margin: 0;
          width: 150px;
          top: 50px;
          //bottom: -20px;
          left: -110px;
          border-radius: 3px;
          box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
          opacity: 1;
          opacity: ${setingMenuOpen ? "1" : "0"};
          z-index: ${setingMenuOpen ? "2" : "-2"};
          z-index: 2;
          transition: z-index 0.5s, opacity 0.5s linear;
          background: ${theme.colors.headMenuBackground};
        }
      `}</style>
      <style jsx>{`
        .headerSetingDroop__dropdown__item {
          display: flex;
          //position: relative;
          margin: 0;
          padding: 5px 10px; //Щоб зробити заокруглення
          font-size: 18px;
          font-weight: 100;
          font-family: ${theme.fontFamily.serif};
          list-style-type: none;
          align-items: center;
          text-decoration: none;
          color: ${theme.colors.headMobileText};
          background: ${theme.colors.headMobileBackground};
        }
        .headerSetingDroop__dropdown__item:hover {
          color: ${theme.colors.headMobileTextHover};
          background: ${theme.colors.headMobileTextBackgroundHover};
          cursor: pointer;
        }
        .headerSetingDroop__dropdown__item:hover {
          color: ${theme.colors.headMobileTextHover};
          background: ${theme.colors.headMobileTextBackgroundHover};
          cursor: pointer;
        }
        //При наведенні на headerSetingDroop__dropdown__item мфняється <a>
        .headerSetingDroop__dropdown__item:hover a {
          color: ${theme.colors.headMobileTextHover};
          background: ${theme.colors.headMobileTextBackgroundHover};
          cursor: pointer;
        }

        //.headerSetingDroop__dropdown__item__a {
        .headerSetingDroop__dropdown__item a {
          margin-left: 10px;
          padding: 0;
          align-items: center; //Y Вирівнювання
          color: ${theme.colors.headMobileText};
          background: ${theme.colors.headMobileBackground};
        }
      `}</style>
    </div>
  );
};

export default HeaderSetingDroop;
