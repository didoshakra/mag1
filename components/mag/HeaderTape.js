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
    <div className="headerTape-section">
      <span className="headerTape__items__text">
        <FontAwesomeIcon icon={faPhoneAlt} /> + 1235 2355 98
      </span>
      <span className="headerTape__items__text">
        <FontAwesomeIcon icon={faTelegramPlane} /> mag@ukr.net
      </span>
      <span className="headerTape__items__text">
        Доставка в робочі дні & Безкоштовне повернення
      </span>

      <style jsx>{`
        .headerTape-section {
          top: 0;
          position: relative;
          padding: 0 1vw;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          background: ${theme.colors.headTapeBackground};
        }

        .headerTape__items__text {
          //display: block;
          padding: 1vw;
          font-size: 10px;
          color: ${theme.colors.headTapeText};
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @media (min-width: 600px) {
          .headerTape-section {
            height: 24px;
            position: relative;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default HeaderTape;
