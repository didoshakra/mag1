//HeaderTape.js
import { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

import { ComponentContext } from "../../context/ComponentContext";

const HeaderTape = () => {
  const { state } = useContext(ComponentContext);
  const { theme } = state;

  return (
    // <div className="headerTape">
    <div className="headerTape__wrapper">
      <span className="headerTape__items__text">
        <FontAwesomeIcon icon={faPhoneAlt} /> + 1235 2355 98
      </span>
      <span className="headerTape__items__text">
        <FontAwesomeIcon icon={faTelegramPlane} /> mag@ukr.net
      </span>
      <span className="headerTape__items__text">
        Доставка в робочі дні & Безкоштовне повернення
      </span>
      {/* </div> */}

      <style jsx>{`
        .headerTape {
            top: 0;
            height: "64px";
        }

        .headerTape__wrapper {
          display: flex;
          flex-direction:column;
          align-items: flex-start;
          justify-content: flex-start;
          background: ${theme.colors.headTapeBackground};
        }

        .headerTape__items__text {
          display: block;
          padding: 5px;
          font-size: 10px;
          color: ${theme.colors.headTapeText};
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (min-width: 600px) {
          .headerTape {
            height: "24px";
        }
        .headerTape__wrapper {
          flex-direction:row;
           position: relative;
          justify-content: space-around;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default HeaderTape;
