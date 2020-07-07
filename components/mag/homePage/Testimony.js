//Testimony.js

import React, { useContext } from "react";

import CarouselRa from "../../ui/carousel/CarouselRa";

const listSlides = [
  {
    // src: "/minishop/images/gallery-1.jpg",
    src: "/vegefoods/images/person_1.jpg",
    userText:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    userName: "Garreth Smith",
    userPosition: "Marketing Manager",
  },
  {
    src: "/vegefoods/images/person_2.jpg",
    // src: "/minishop/images/gallery-2.jpg",
    userText:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    userName: "Garreth Smith",
    userPosition: "Interface Designer",
  },
  {
    src: "/vegefoods/images/person_3.jpg",
    // src: "/minishop/images/gallery-3.jpg",
    userText:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    userName: "Garreth Smith",
    userPosition: "UI Designer",
  },
  {
    src: "/vegefoods/images/person_4.jpg",
    // src: "/minishop/images/gallery-4.jpg",
    userText:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    userName: "Garreth Smith",
    userPosition: "Web Developer",
  },
  {
    src: "/vegefoods/images/person_2.jpg",
    // src: "/minishop/images/gallery-5.jpg",
    userText:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts",
    userName: "Garreth Smith",
    userPosition: "System Analyst",
  },
];

const Testimony = () => {
  return (
    <section className="testimony-section">
      {/* <div className="container"> */}
      <div className="testimony-header-conteiner">
        <div className="testimony-header-column">
          <span className="testimony-header-column__subheading">Testimony</span>
          <h2 className="mb-4">Our satisfied customer says</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in
          </p>
        </div>
      </div>
      <div className="testimony-carousel-conteiner">
        <CarouselRa
          ListSlides={listSlides}
          Height="350px"
          VisibleElements="3"
          Dots={true}
          DotsMobi={true}
        />
      </div>
      <style jsx>{`
        .testimony-section {
          padding: 5rem 2vw; //rem-шрифт кореневого
          position: relative;
        }
        .testimony-header-conteiner {
          margin-bottom: 3rem; //mb-5
          padding: 0 5vw 1rem; //Відступи всередині контейнера row
          display: flex; //row
          flex-wrap: wrap; //row
          justify-content: center; //justify-content-center
          align-items: center;
          //border: 1px solid rgba(63, 93, 35, 1);
        }

        .testimony-header-column {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          //border: 1px solid #82ae46;
        }

        .testimony-header-column__subheading {
          font-size: 18px;
          display: block;
          margin-bottom: 10px;
          font-family: "Lora", Georgia, serif;
          font-style: italic;
          color: #82ae46;
          font-weight: 500;
        }

        .testimony-header-column h2 {
          margin-bottom: 1.5rem;
          position: relative;
          font-size: 28px;
          font-weight: 600;
          color: #000000;
        }
        .testimony-header-column p {
          margin-top: 0;
          margin-bottom: 1rem;
          color: gray;
        }
        .testimony-carousel-conteiner {
          display: block;
          width: 100%;
          //border: 1px solid rgba(157, 25, 107, 1);
        }

        @media (min-width: 768px) {
          .testimony-header-conteiner {
            padding: 0 15vw 1rem; //Відступи всередині контейнера row
          }
          .testimony-header-column h2 {
            font-size: 40px;
          }
        }
      `}</style>
    </section>
  );
};
export default Testimony;
