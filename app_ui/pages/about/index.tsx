import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Text } from "@nextui-org/react";

import WrapperAbout from "./styled-about";
import "animate.css";

const AboutPage: NextPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="Aboutmyself" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperAbout>
        <Text h1 size={45} weight="bold">
          Aboutmyself
        </Text>
        <Text h2 size={25} weight="bold">
          Ever since I was young, I have always been fascinated by the world of
          technology. Growing up, I spent countless hours tinkering with
          computers, experimenting with code, and exploring the latest software
          applications. As I got older, my passion for technology only grew
          stronger, and I decided to pursue a career in software development.
          Throughout my career, I have worked with a wide range of technologies,
          including JavaScript, TypeScript, React Native, React.js, and many
          others. I have developed expertise in building high-quality software
          applications that are both efficient and user-friendly, and I have a
          proven track record of delivering projects on time and within budget.
          In my free time, I enjoy working on personal projects to continue
          honing my skills and exploring new technologies.In summary, I believe
          that my skills and experience make me a strong candidate for any
          development role. I have a proven track record of delivering
          high-quality projects, working collaboratively with other developers
          and stakeholders, and continuously learning and improving my skills. I
          am excited about the opportunity to bring my expertise to a new team
          and contribute to the success of your organization.
        </Text>
      </WrapperAbout>
    </div>
  );
};

export default AboutPage;
