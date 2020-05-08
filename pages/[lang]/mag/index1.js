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
  const { theme } = state;

  return (
    // <AppFrame classes={{ drawer: className.drawer }}>
    <Layout>
      <Head>
        <title>{t("header-titleSite")}</title>
        {/* <title>Ra-test</title> */}
      </Head>
      {/* Домашня стор/ hero-???*/}
      <section id="home-section" className="hero">
        {/* слайдер *** owl-carousel=text-align: center; */}
        <div className="home-slider">
          {/* елемент слайдеру */}
          <div
            className="slider-item image1"
            // className="slider-item "
            // style="background-image: url(images/bg_1.jpg);"
          >
            {/* overlay-Робить тінь */}
            {/* <div className="overlay"></div> */}
            {/* container?????? */}
            {/* <div className="container"> */}
            {/* <div
                className="row slider-text justify-content-center align-items-center"
                data-scrollax-parent="true"
              > */}
            <div className="slider-text">
              {/* <div className="col-md-12 ftco-animate text-center"> */}
              <div className="text-center">
                {/* <h1 className="mb-2">Ми пропонуємо свіжі овочі та фрукти</h1> */}
                <h1 className="mb-2">
                  We serve Fresh Vegestables &amp; Fruits
                </h1>
                <h2 className="subheading mb-4">
                  {/* Ми постачаємо органічні овочі та фрукти */}
                  We deliver organic vegetables &amp; fruits
                </h2>
                <p>
                  <a href="#" class="btn btn-primary">
                    Докладніше
                  </a>
                </p>
              </div>
            </div>
            {/* </div> */}
          </div>
          {/* елемент слайдеру */}
          <div className="slider-item image2">
            {/* overlay-Робить тінь */}
            {/* <div className="overlay"></div> */}
            {/* <div className="container"> */}
            {/* <div
                className="row slider-text justify-content-center align-items-center"
                data-scrollax-parent="true"
              > */}
            <div className="slider-text">
              {/* <div className="col-md-12 ftco-animate text-center"> */}
              {/* <div className="col-md-12"> */}
              {/* <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1> */}
              <h1 className="mb-2">100% Fresh &amp; Organic Foods</h1>
              <h2 className="subheading mb-4">
                We deliver organic vegetables &amp; fruits
              </h2>
              <p>
                <a href="#" class="btn btn-primary">
                  Докладніше
                </a>
              </p>
              {/* </div> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: repeat(12, 1fr);
          grid-template-rows: 50px 350px 50px;
        }
        .home-slider {
          position: relative;
          height: 650px;
          z-index: 0;
        }

        .image2 {
          background: 100% transparent url(/vegefoods/images/bg_1.jpg) no-repeat;
        }
        .image1 {
          background: 100% transparent url(/vegefoods/images/bg_2.jpg) no-repeat;
          animation-delay: 5s; //Затримка анімації
        }
        .slider-item {
          display: flex;//rrr
          align-items:center;
          justify-content:center;
          //
          position: absolute; //ku
          //0,0,0,0-розтягує на весь батьківський блок не залежно від контенту
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          height: 650px; //ш
          background-size: cover; //ш-Маштабує зображення.
          background-repeat: no-repeat; //-ш
          background-position: center center; //ш
          z-index: 0;
          //
          animation-name: cover; //ім'я секції анімації
          animation-fill-mode: forwards; //rЗалишається в кінцевому стані*/
          animation-timing-function: linear; //рівномірна зміна
          animation-iteration-count: infinite; //к-сть повторів/rinfinite нескінченно
          animation-duration: 5s; //протяжність анімації
          animation-direction: alternate; //Анімація змінює напрямок в кожному циклі
        }

        @keyframes cover {
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
          /*from {
            transform: scale(1.06);
          }
          to {
            transform: scale(1);`
          }*/
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
          height: 650px;
          text-align: center;
          z-index: 0;
          /*@include media-breakpoint-down(md) {
            text-align: center;
          }*/
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
          //font-family: ${theme.fontFamily.fontTertiary};
          font-family: ${theme.fontFamily.mimicHand};
          //font-family: ${theme.fontFamily.notoSans};//!!! не працює/Локальний шрифт
          //font-family: Noto Sans;//Працює!!! Загрузка локального шрифта через <style jsx global> Loyout.js
          /*@include media-breakpoint-down(sm) {
              font-size: 40px;
              // color: $pri;
            }*/
        }
        .slider-text p {
          color: rgba(0, 0, 0, 0.8);
          font-weight: 400;
          //

          /*@include media-breakpoint-down(md) {
              color: rgba(255, 255, 255, 0.7);
              font-size: 23px;
            }*/
        }

        /*.ftco-animate {
            opacity: 0;
          visibility: hidden;
        }*/
      `}</style>
    </Layout>
  );
}
