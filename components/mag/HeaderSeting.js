//HeaderSeting
//Зміна мови і теми+ App меню

import { useContext } from "react";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderSetingDroop from "./HeaderSetingDroop";
import ThemeSwitcher from "../all/ThemeSwitcher";
import LocaleSwitcherIcon from "../all/LocaleSwitcherIcon";

const HeaderSeting = () => {
  const { state } = useContext(ComponentContext);
  const theme = state.theme;
  // const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="headerSeting">
      {/* Іконки головного меню Seting */}
      <div className="headerSeting_larg">
        {/* тема */}
        <ThemeSwitcher />
        {/* Мова */}
        <LocaleSwitcherIcon />
        {/* <LocaleSwitcher /> */}
      </div>

      {/* Випадаюче меню Seting(мобільне) */}
      <div className="headerSeting__mobile">
        <HeaderSetingDroop />
      </div>

      <style jsx>
        {`
          .headerSeting {
            /*padding: 10px; /*Поля*/
            height: 64px;
            display: flex;
            justify-content: space-between; /*по-X Вирівнювання вліво-вправо*/
            align-items: center; /* по Y */
            background: ${theme.colors.headMobileBackground};
          }
          .headerSeting_larg {
            display: none; /*не показує */
          }
          /* --- Mobile navigation icon -- */
          .headerSeting__mobile {
            display: flex;

            //z-index: 19;
          }
          @media (min-width: 960px) {
            .headerSeting_larg {
              display: flex;
            }
            .headerSeting__mobile {
              display: none;
            }
            .headerSeting {
              background: ${theme.colors.headBackground};
            }
          }
        `}
      </style>
    </div>
  );
};

export default HeaderSeting;
