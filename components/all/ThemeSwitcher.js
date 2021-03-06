//ThemeSwitcher.js //Зміна теми(шконка+зміна теми)
//Використовую

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const ThemeSwitche = () => {
  const { t } = useTranslation();
  const { state, dispatch } = useContext(ComponentContext);
  const { theme, themeTypeLight } = state;

  // console.log("ThemeSwitcher.js/themeDark1", themeDark1);
  // console.log("ThemeSwitcher.js/themeLith1", themeLith1);
  const themeMenuToggle = () => {
    var newTheme = "light";
    if (themeTypeLight) {
      newTheme = "dark";
    }
    // console.log("HeaderMenu.js/newTheme=", newTheme);
    dispatch({ type: "THEME", payload: newTheme }); //Змінюємо state.theme
  };

  return (
    <div className="themeSwitcher">
      {/* іконка зміни теми */}
      <a
        className="themeSwitcher__icon"
        title={t("headerMenu_iconTitleTheme")}
        onClick={themeMenuToggle}
      >
        <FontAwesomeIcon icon={themeTypeLight ? faSun : faMoon} />
      </a>

      <style jsx>{`
        .themeSwitcher {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          list-style-type: none;
        }
        .themeSwitcher__icon {
          margin-right: 5px; //Відступ від кожного елемента зліва
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: ${theme.colors.headIconBorderWidht}
            ${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headBackground};
        }

        .themeSwitcher__icon:hover {
          color: ${theme.colors.headIconHover};
          background: ${theme.colors.headIconBackgroundHover};
          cursor: pointer;
        }
        @media (min-width: 960px) {
          themeSwitcher__icon {
            color: ${theme.colors.headIcon};
            background: ${theme.colors.headMobileBackground};
          }
        }
      `}</style>
    </div>
  );
};

export default ThemeSwitche;
