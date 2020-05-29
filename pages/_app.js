// pages/_app.js
import React from "react";
import App, { Container } from "next/app";
// import Layout from "../components/Layout";
import { ThemeProvider } from "../context/ComponentContext";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
config.autoAddCss = false; // Скажіть шрифту Awesome пропустити додавання CSS автоматично, оскільки він імпортується вище

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      // <LocaleProvider>
      <ThemeProvider>
        <Component {...pageProps} />
        {/* <Layout> */}
        <style jsx global>{`
          //global Next.js
          *,
          *::before,
          *::after {
            box-sizing: border-box;
          }
          #__next,
          body,
          html {
            height: 100%;
            width: 100%;
          }
          body {
            margin: 0;
            padding: 0;
            //overflow: hidden;//Обрізає лишнє
            text-rendering: optimizeLegibility;
            font-family: "Poppins", Arial, sans-serif;
            font-size: 15px;
            line-height: 1.8;
            font-weight: 400;
            color: #212529;
            text-align: left;
            background-color: #fff;
          }
          hr {
            -webkit-box-sizing: content-box;
            box-sizing: content-box;
            height: 0;
            overflow: visible;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin: 0;
            line-height: 1.5;
          }
          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 36px;
          }

          p {
            margin: 0;
            padding: 0;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            color: #6610f2;
            cursor: pointer;
          }
          img {
            max-width: 100%;
          }
        `}</style>
      </ThemeProvider>
      // </LocaleProvider>
    );
  }
}

export default MyApp;
