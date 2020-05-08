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
  const headerNone = "-24px"; //Сховати
  const [headerTop, setHeaderTop] = React.useState(height0); //*** щоб ховалась/появлялась Head при скролі
  // const drawerOnClick = () => {
  //   setDrawerOpen(!drawerOpen);
  // };

  //*** щоб ховалась/появлялась Head при скролі
  function mouseMove() {
    // alert("Ти порухав мишкою!/mousemove");
    // console.log("Header.js/скрол=", pageYOffset);
    // console.log("Header.js/Y=", event.pageY);
    var st = pageYOffset;
    // console.log("Header.js/st=", st + "/lastScrollTop=", lastScrollTop);
    if (st > 100) {
      setHeaderTop(headerNone);
    } else {
      setHeaderTop("0px");
    }
  }

  useEffect(() => {
    // Прив’яжіть прослуховувач події
    document.addEventListener("scroll", mouseMove); //Для скролу
    // document.addEventListener("mousemove", mouseMove);//для переміщення мишки (координати)
    return () => {
      // Від’єднайте слухача події під час очищення
      document.removeEventListener("scroll", mouseMove);
      // document.removeEventListener("mousemove", mouseMove);
    };
  });

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
          position: fixed;
          //top: ${headerTop};
          //height: ${height0};
          width: 100%;
          transition: top 0.4s ease-in;
          z-index: 100;
          background: ${theme.colors.head0Background};
        }
        .header0__wrapper {
          height: ${height0};
          display: flex;
          justify-content: space-around; /*по-X  рівномірно, крайні 1/2*/
          align-items: center; /* по Y */
          //background: ${theme.colors.head0Background};
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
          margin: 0;
          padding: 0;
          width: 100%;
          //position: relative;
          display: flex;
          top: "0px";
          //height: ${height0};
          //z-index: 100;
          align-items: flex-start; /*Якщо flex-direction:column то по-X*/
          justify-content: flex-start; /*Якщо flex-direction:column то по-Y*/
          background: ${theme.colors.head0Background};
        }
        .header0__wrapper {
          //height: ${height0};
          display: flex;
          flex-direction:column;
          align-items: flex-start; /*Якщо flex-direction:column то по-X*/
          justify-content: flex-start; /*Якщо flex-direction:column то по-Y*/
          background: ${theme.colors.head0Background};
        }
      `}</style>
    </div>
  );
};

export default Header0;
