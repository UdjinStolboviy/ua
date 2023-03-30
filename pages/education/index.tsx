import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Text } from "@nextui-org/react";

import "animate.css";

import WrapperEducation from "./styled-education";

const EducationPage: NextPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="CV-Stolboviy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperEducation>
        <Text h1 size={45} weight="bold">
          EDUCATION
        </Text>
        <Text h2 size={25} weight="bold">
          BEONMAX and UDEMY, (2019 - Present) IT programming courses and hanging
          developer skills.Every year I take different courses. A huge advantage
          of the company will be the provision of courses to improve skills and
          the study of new technologies.
        </Text>
        <Text h2 size={25} weight="bold">
          GREEN FOREST (2022 - Present) English language course.
        </Text>
        <Text h2 size={25} weight="bold">
          REDFOX (2019 - 2020) English language course.
        </Text>
        <Text h2 size={25} weight="bold">
          University of Food Technologies (2009 - 2014) Department of automation
          and computer integrated. Technologies, master`s degree.
        </Text>
      </WrapperEducation>
    </div>
  );
};

export default EducationPage;
