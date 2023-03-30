import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Button, Card, Col, Grid, Row, Text, Tooltip } from "@nextui-org/react";

import "animate.css";

import WrapperMyWorksWeb from "./styled-my-works-web";
import imgWindow from "../../public/media/windo.9bd273f4.png";
import imgUber from "../../public/media/5uber.3c7abae6.png";
import imgYoga from "../../public/media/7yoga.a9404375.png";
import imgWord from "../../public/media/6word.0a9e4515.png";
import imgToword from "../../public/media/toword.d92e7e4d.png";
import imgRvise from "../../public/media/rviseSiteTest.bf9f60ff.png";
import imgTezos from "../../public/media/ReactTezosTest.5cb57949.png";
import imgAppCo from "../../public/media/ReactBitmediaTest.486e1ca9.png";
import imgPulsometer from "../../public/media/puls.7cf63ff9.png";
import imgPlantin from "../../public/media/Planet.fb34308a.png";
import imgPicture from "../../public/media/Pictur.92d42e3b.png";
import imgAddimg from "../../public/media/AddIMGTest.5635545c.png";
import imgReacttodo from "../../public/media/react-prodject.5c4c1d9e.png";
import imgGot from "../../public/media/react-fetch-gotapp-ts.b636f58b.png";
import imgPreon from "../../public/media/PreionTest.9b4d942f.png";
import imgKinomonster from "../../public/media/Kinomons.7b6275a8.png";
import imgLoginAng from "../../public/media/Loginang.d84f2e49.png";

import CardView from "@/components/CardView/CardView";

export interface IProduct {
  name: string;
  url: string;
  imgSrc: any;
  technologies: string;
}

const EducationPage: NextPage = () => {
  const productWeb: IProduct[] = [
    {
      name: "Tezos Ukraine",
      url: "https://udjinstolboviy.github.io/ua/app/ReactTezosTest/",
      imgSrc: imgTezos.src,
      technologies: "REACT TS SCSS REST API",
    },
    {
      name: "App Co",
      url: "https://udjinstolboviy.github.io/ua/app/ReactBitmediaTest/",
      imgSrc: imgAppCo.src,
      technologies: "REACT TS SCSS REST API",
    },
    {
      name: "PLANTIN",
      url: "https://udjinstolboviy.github.io/ua/app/plantinSiteTest/",
      imgSrc: imgPlantin.src,
      technologies: "REACT HTML CSS SCSS JS",
    },
    {
      name: "Pulsometer Site",
      url: "https://udjinstolboviy.github.io/ua/app/pulsometer/",
      imgSrc: imgPulsometer.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "Picture Site",
      url: "https://udjinstolboviy.github.io/ua/app/Picture/",
      imgSrc: imgPicture.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "Rvise Site",
      url: "https://udjinstolboviy.github.io/ua/app/RviseSiteTest/",
      imgSrc: imgRvise.src,
      technologies: "REACT HTML CSS SCSS JS",
    },
    {
      name: "Uber",
      url: "https://udjinstolboviy.github.io/ua/app/uber/",
      imgSrc: imgUber.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "Yoga",
      url: "https://udjinstolboviy.github.io/ua/app/yoga/",
      imgSrc: imgYoga.src,
      technologies: "HTML CSS SCSS REACT JS",
    },
    {
      name: "WORDPRESS",
      url: "https://udjinstolboviy.github.io/ua/app/word/",
      imgSrc: imgWord.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "WINDOW",
      url: "https://udjinstolboviy.github.io/ua/app/Window/",
      imgSrc: imgWindow.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "TWOWORDS",
      url: "https://udjinstolboviy.github.io/ua/app/twowords/",
      imgSrc: imgToword.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "ADD IMG",
      url: "https://udjinstolboviy.github.io/ua/app/testADDimg/",
      imgSrc: imgAddimg.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "REACT TODO",
      url: "https://udjinstolboviy.github.io/ua/app/react-todo/",
      imgSrc: imgReacttodo.src,
      technologies: "REACT CSS SCSS JS",
    },
    {
      name: "REACT FETCH GOT",
      url: "https://udjinstolboviy.github.io/ua/app/react-fetch-gotapp-ts/",
      imgSrc: imgGot.src,
      technologies: "REACT TS SCSS REST API",
    },
    {
      name: "Kinomonster",
      url: "https://udjinstolboviy.github.io/ua/app/kinomonster/",
      imgSrc: imgKinomonster.src,
      technologies: "HTML CSS SCSS JS",
    },
    {
      name: "Login",
      url: "https://udjinstolboviy.github.io/ua/app/angularMaterialLogin/",
      imgSrc: imgLoginAng.src,
      technologies: "ANGULAR SCSS",
    },
    {
      name: "PreionTest",
      url: "https://udjinstolboviy.github.io/ua/app/PreionTest/",
      imgSrc: imgPreon.src,
      technologies: "REACT TS SCSS AnimeteCSS",
    },
  ];
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="CV-Stolboviy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperMyWorksWeb>
        <Text h1 size={45} weight="bold">
          MY WORKS WEB
        </Text>
        <Text h2 size={25} weight="bold">
          Here the text will describe those projects that I cannot show and
          disclose because I was the customer. The projects that you can view
          here are mostly test tasks and your own or educational projects.
        </Text>
        <Text h2 size={25} weight="bold">
          1. Commercial project. The main idea of the project was to implement a
          website for the company. The main difficulties of the problems solved
          in this project were as follows. Implementation of navigation
          connecting third-party APIs for displaying information, development of
          mobile and desktop layouts. (React.js · Next.js · TypeScript ·
          Strapi.js)
        </Text>
        <Text h2 size={25} weight="bold">
          2. Commercial project. The main idea is to organize and develop an
          online store. The main topics that were developed were registration on
          the site, integration of the Telegram app to collect information about
          the order, sending notifications about the order as well.Development
          of mobile and desktop layouts. (React.js · Next.js · TypeScript ·
          Strapi.js)
        </Text>
        <Text h2 size={25} weight="bold">
          3. The projects that you can view here are mostly test tasks and your
          own or educational projects:
        </Text>
        <Grid.Container gap={2} justify="center">
          {productWeb.map((item: IProduct, index) => (
            <CardView item={item} index={index} key={index} />
          ))}
        </Grid.Container>
      </WrapperMyWorksWeb>
    </div>
  );
};

export default EducationPage;
