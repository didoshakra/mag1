//LocaleSwitcherIcon.js //
//Іконка мови окремо (випадаючий список викликається)

import React, { useContext, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ComponentContext } from "../../context/ComponentContext";
import useTranslation from "../../translations/useTranslation";
import LocaleSwitcherDroop from "./LocaleSwitcherDroop";

const LocaleSwitcherIcon = () => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  //***Для клацання поза обєктом
  const wrapperRef = useRef(null); //Для клацання поза обєктом
  useOutsideAlerter(wrapperRef); //Для клацання поза обєктом
  function useOutsideAlerter(ref) {
    //*** Для клацання поза елементом Решение с React ^ 16.8 с использованием хуков
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        //Якщо поза елементом
        //alert("Ти клацнув поза мною!");
        // langMenuToggle(); //Погано-спрацьвує від іншого обєкту
        if (langMenuOpen) {
          setLangMenuOpen(false); //Закриваєм меню
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

  const langMenuOpenToggle = () => {
    // if (!langMenuOpen) {
    setLangMenuOpen(!langMenuOpen);
    // }
    // console.log("langMenuToggle/langMenuOpen=", langMenuOpen);
  };

  return (
    <div ref={wrapperRef} className="localeSwitcherIcon">
      {/* <div className="localeSwitcherIcon"> */}
      {/* іконка */}
      <a className="localeSwitcherIcon__icon" onClick={langMenuOpenToggle}>
        <FontAwesomeIcon icon={faGlobe} title={t("localeSwitcher_title")} />
      </a>
      {/* Випадаюче меню */}
      <LocaleSwitcherDroop
        langMenuOpen={langMenuOpen}
        setLangMenuOpen={setLangMenuOpen}
      />
      <style jsx>{`
        .localeSwitcherIcon {
          position: relative;
          //margin: 0;
          //padding: 0;
          list-style-type: none; //маркери для списка.
        }
        .localeSwitcherIcon__icon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
          //border: 2px solid ${theme.colors.headIcon};
          border: ${theme.colors.headIconBorderWidht} ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          width: 36px;
          height: 36px;
        }
        .localeSwitcherIcon__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LocaleSwitcherIcon;
