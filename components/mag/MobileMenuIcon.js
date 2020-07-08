//MobileMenuIcon.js //Після розділення на HeaderMenu+HeaderSeting
//Іконка яка викликає MobileMenuDroop-випадаюче меню
//список меню з масиву props.menu

import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

const MobileMenuIcon = (props) => {
  const { t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const { theme } = state;

  return (
    // Навігація
    <div className="mobileMenuIicon">
      {/* іконка мобільного меню/faList/ */}
      <i
        onClick={() =>
          props.mobileMenuToggle(props.mobileMenuOpen ? false : true)
        }
        title={t("headerMenu_iconTitleNavMenu")}
      >
        <FontAwesomeIcon icon={faList} />
      </i>

      <style jsx>{`
        .mobileMenuIicon {
          margin: 0;
          margin-right: 5px; //Відступ від кожного елемента зліва
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${theme.colors.headIconHover};
          //background: ${theme.colors.headIconBackgroundHover};
          //border: ${theme.colors.headIconBorderWidht}${theme.colors.headIconBorderStyle} ${theme.colors.headIcon};
          border-radius: 36px;
          width: 36px;
          height: 36px;
        }
        .mobileMenuIicon:hover {
          color: ${theme.colors.headIcon};
          background: ${theme.colors.headIconHover};
          cursor: pointer;
        }
        @media (min-width: 960px) {
          .mobileMenuIicon {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default MobileMenuIcon;
