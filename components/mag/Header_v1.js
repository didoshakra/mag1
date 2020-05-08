//Header.js
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

import HeaderLogo from "./HeaderLogo";
import { ComponentContext } from "../../context/ComponentContext";
import HeaderMenu from "./HeaderMenu";
import HeaderSeting from "./HeaderSeting";

var lastScrollTop = 0;
var scrolUP = false;

const Header = () => {
  const { state } = useContext(ComponentContext);
  const { theme } = state;
  const [headerOpen, setHeaderOpen] = React.useState(true); //*** щоб ховалась/появлялась Head при скролі
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
      if (st - lastScrollTop > 0 || (st - lastScrollTop == 0 && !scrolUP)) {
        // console.log("Скрол вниз!");
        scrolUP = false;
        // alert("Скрол вниз!");
        setHeaderOpen(false);
        // downscroll code
      } else {
        setHeaderOpen(true);
        scrolUP = true;
        // console.log("Скрол вверх!");
      }
    } else {
      setHeaderOpen(true);
    }
    lastScrollTop = st;
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
    <div className="header">
      <div className="header0__wrapper">
        {/* <div className="header0__items"> */}
        <span className="header0__items__text">
          <FontAwesomeIcon icon={faPhoneAlt} /> + 1235 2355 98
        </span>
        {/* </div> */}
        {/* <div className="header0__items"> */}
        <span className="header0__items__text">
          <FontAwesomeIcon icon={faTelegramPlane} /> mag@ukr.net
        </span>
        {/* </div> */}
        {/* <div className="header0__item"> */}
        <span className="header0__items__text">
          Доставка в робочі дні & Безкоштовне повернення
        </span>
        {/* </div> */}
      </div>
      <div className="header__wrapper">
        <HeaderLogo />
        <div className="header__wrapper__menu">
          {/* Навігація */}
          <HeaderMenu />
          {/* Налаштування(App,Теми,Мови)*/}
          <HeaderSeting />
        </div>
      </div>

      <style jsx>{`
        .header {
          /* Для того щоб плавно сховати шапку*/
          position: fixed;
          top: ${headerOpen ? "0" : "-96px"};
          // height: 64px;
          min-height: 96px;
          width: 100%;
          transition: top 0.4s ease-in;
          z-index: 100;
        }
        .header0__wrapper {
          /*padding: 10px; /*Поля*/
          //max-height: 60px;
          height: 32px;
          display: flex;
          justify-content: space-around; /*по-X  рівномірно, крайні 1/2*/
          //justify-content: space-evenly; /*по-X  рівномірно */
          align-items: center; /* по Y */
          background: ${theme.colors.head0Background};
        }

        .header0__items {
          display: block;
          justify-content: center; /*по-X Вирівнювання вліво-вправо*/
          align-items: center; /* по Y */
        }
        .header__items__text {
          margin-left: 5px;
        }

        .header0__items__text {
          display: block;
          padding: 5px;
          font-size: 10px;
          // color: rgba(0, 0, 0, 0.7);
          color: ${theme.colors.head0Text};
          text-transform: uppercase;
          letter-spacing: 1px;
          //font-weight: 400;
          //font-size: 30px;
          //color: $black;
        }
        //https://fontawesome.com/how-to-use/on-the-web/advanced/css-pseudo-elements
        /*.header0__items__text::before {
          //font-family: "Font Awesome 5 Brands";
          //content: "\f3fe"; //fa-telegram-plane
          font-family: "Font Awesome 5 Solid Style";
          content: "\f879"; //fa-phone-alt
          font-weight: 900;
        }*/
        .header__wrapper {
          /*padding: 10px; /*Поля*/
          //max-height: 60px;
          height: 64px;
          display: flex;
          justify-content: space-between; /*по-X Вирівнювання вліво-вправо*/
          align-items: center; /* по Y */
          background: ${theme.colors.headBackground};
        }
        .header__wrapper__menu {
          display: flex;
          justify-content: space-end; /*по-X Вирівнювання вправо*/
          align-items: center; /* по Y */
        }
        @media (max-width: 600px) {
          /*iPhone<600px*/
          .header0__wrapper {
          /*padding: 10px; /*Поля*/
          height: 92px;
          display: flex;
          flex-direction:column;
          justify-content: flex-start ; //по-X
          }
          .header {
          position: fixed;
          top: ${headerOpen ? "0" : "-156px"};
          }
      `}</style>
    </div>
  );
};

export default Header;
