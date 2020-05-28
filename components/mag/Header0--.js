//Header.js
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

import { ComponentContext } from "../../context/ComponentContext";

const Header0 = () => {
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const height0 = "24px"; //Висота header0

  return (
    <div className="header0">
      <div className="header0__wrapper">
        <span className="header0__items__text">
          <FontAwesomeIcon icon={faPhoneAlt} /> + 1235 2355 98
        </span>
        <span className="header0__items__text">
          <FontAwesomeIcon icon={faTelegramPlane} /> mag@ukr.net
        </span>
        <span className="header0__items__text">
          Доставка в робочі дні & Безкоштовне повернення
        </span>
      </div>

      <style jsx>{`
        .header0 {
          /* Для того щоб плавно сховати шапку*/
          transition: top 0.4s ease-in;
          //z-index: 100;
          //background: ${theme.colors.head0Background};
        }

        .header0__wrapper {
          height: ${height0};
          display: flex;
          justify-content: space-around; /*по-X  рівномірно, крайні 1/2*/
          align-items: center; /* по Y */
          background: ${theme.colors.head0Background};
        }

        .header0__items__text {
          display: block;
          padding: 5px;
          font-size: 10px;
          // color: rgba(0, 0, 0, 0.7);//випадаюче мобільне меню
          color: ${theme.colors.head0Text};
          text-transform: uppercase;
          letter-spacing: 1px;//відстань між буквами в тексті
        }
        //іконка перед меню- https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements
        /*.header0__items__text::before {
          //font-family: "Font Awesome 5 Brands";
          //content: "\f3fe"; //fa-telegram-plane
          font-family: "Font Awesome 5 Solid Style";
          content: "\f879"; //fa-phone-alt
          font-weight: 900;
        }*/

        @media (max-width: 600px) {
          /*iPhone<600px*/
          .header0 {
          /* Для того щоб плавно сховати шапку*/
          //width: 100%;
          flex-direction:column;
          z-index: 100;
          flex-wrap: wrap;
          align-items: flex-start; /*Якщо flex-direction:column то по-X*/
          justify-content: flex-start; /*Якщо flex-direction:column то по-Y*/
          background: ${theme.colors.head0Background};
        }
        .header0__wrapper {
          //height: ${height0};
          width: 100%;
          max-height: 100px;
          display: block;
          flex-direction:column;
          align-items: flex-start; /*Якщо flex-direction:column то по-X*/
          justify-content: flex-start; /*Якщо flex-direction:column то по-Y*/
          background: ${theme.colors.head0Background};
          z-index: 100;
        }
      `}</style>
    </div>
  );
};

export default Header0;
