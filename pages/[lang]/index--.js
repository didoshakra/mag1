//home_mui.js / Muiv4.5.1
//Добавлено animat
import React, { useContext } from "react";
import Link from "next/link";
import Head from "next/head";

import Layout from "../../components/all/Layout";
import useTranslation from "../../translations/useTranslation";
import { ComponentContext } from "../../context/ComponentContext";

export default function HomePage() {
  const { locale, t } = useTranslation();
  const { state } = useContext(ComponentContext);
  const theme = state.theme;

  return (
    // <AppFrame classes={{ drawer: className.drawer }}>
    <Layout>
      <Head>
        <title>{t("header-titleSite")}</title>
        {/* <title>Ra-test</title> */}
      </Head>
      {/* Домашня стор/ hero-???*/}
      {/* <section className="hero"> */}
      {/* слайдер *** owl-carousel=text-align: center; */}
      <section className="home-slider">
        {/* елемент слайдеру */}
        <div className="slider-item image1">
          {/* overlay/перекривати-Робить тінь */}
          <div className="overlay"></div>
          <div className="slider-text">
            <h1>Ми пропонуємо свіжі овочі та фрукти</h1>
            <h2 className="subheading">
              Ми постачаємо органічні овочі та фрукти
            </h2>
            <p>
              <a href="#" class="btn btn-primary">
                Докладніше
              </a>
            </p>
          </div>
        </div>
        {/* елемент слайдеру */}
        <div className="slider-item image2">
          {/* overlay/перекривати-Робить тінь */}
          <div className="overlay"></div>
          <div className="slider-text">
            {/* <h1>100% Fresh &amp; Organic Foods</h1> */}
            <h1>100% свіжа та органічна їжа</h1>
            <h2 className="subheading">
              Ми постачаємо органічні овочі та фрукти
            </h2>
            <p>
              <a href="#" class="btn btn-primary">
                Докладніше
              </a>
            </p>
          </div>
        </div>
      </section>
      <style jsx>{`
        .home-slider {
          position: relative;
          height: 650px;
          z-index: -9;
        }
        .image2 {
          background: 100% transparent url(/vegefoods/images/bg_1.jpg) no-repeat;
        }
        .image1 {
          background: 100% transparent url(/vegefoods/images/bg_2.jpg) no-repeat;
          animation-delay: 5s; //Затримка анімації для 2-го слайду
        }
        .slider-item {
          position: absolute; //Щоб не бачити цей <div> !!! Інакше 1-й слайд буде відкириватись за 1-м
          //0,0,0,0-розтягує position: absolute; на весь батьківський блок не залежно від контенту
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          align-items:center;
          justify-content:center;
          height: 650px; //ш
          background-size: cover; //ш-Маштабує зображення.
          background-repeat: no-repeat; //-ш
          background-position: center center; //ш
          //z-index: 0;
          //
          animation-name: coverSlide; //ім'я секції анімації
          //animation-fill-mode: forwards; //rЗалишається в кінцевому стані*/
          animation-timing-function: linear; //рівномірна зміна
          animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
          animation-duration: 5s; //протяжність анімації
          animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
        }

        @keyframes coverSlide {
          0% {
            opacity: 1;
          }
          45% {
            opacity: 1;
          }
          55% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        from {
            transform: scale(1.05);
          }
          to {
            transform: scale(1);
          }
        }


        .overlay {
          position: absolute;
          //0,0,0,0-розтягує на весь батьківський блок не залежно від контенту
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: black;
          opacity: 0.2;
        }

        .slider-text {
          //position: absolute;//З аbsolute не працює центрування
          display: flex;
          align-items: center; //Y-вертикально
          justify-content: center; //X-горизонтально
          flex-direction: column; //в стовбець
          text-align: center;
          //
          height: 650px;//Треба
        }

        .subheading {
          color: black;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: inline-block;
          color: white;
        }
        .slider-text h1 {
          font-size: 8vw;
          color: white;
          line-height: 1.3;
          font-weight: 100;
          font-family: ${theme.fontFamily.mimicHand};
          //font-family: ${theme.fontFamily.notoSans};//!!! не працює/Локальний шрифт
          /*font-family: Noto Sans;//Працює!!! Загрузка локального шрифта через <style jsx global> Loyout.js*/
          //@include media-breakpoint-down(sm) {font-size: 40px;color: $pri; }
        }

        .slider-text p {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 400;
        }
      `}</style>
    </Layout>
  );
}
