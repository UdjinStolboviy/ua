import { NextPage, GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { Text } from "@nextui-org/react";

import "animate.css";

import WrapperMyWork from "./styled-my-work";

const MyWorkPage: NextPage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="fish tropical for everyone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WrapperMyWork>
        <Text h1 size={50} weight="bold">
          MY WORK
        </Text>
        <Text h2 size={30} weight="bold">
          Web and Mobile (React Native, React.js Developer) (2021 - Present)
          <br />I work as a developer in the company Digicode. <br />
          Skills: • JavaScript • TypeScript React Native • React Navigation •
          ReactNativeReanimated• Firebase • GooglePayConsole • AppStoreConnect •
          React.js • Next.js • Strapi.js(Node.js) • InversifyJS • MobX • Redux •
          Git • Figma • JIRA, Slack.
        </Text>
        <Text h2 size={22} weight="bold">
          Projects on which I worked in the company:
        </Text>
        <Text h2 size={22} weight="bold">
          1.Project description: The main idea of the project was to implement a
          social network for business owners where they could communicate and
          share contacts. <br /> Product: USA, Israel company.
          <br />
          Project team size: 5 team members. <br />
          My work (Achievements): It was developed and integrated. Registration,
          working with third-party services from the client, connecting them to
          the project, generation of posts, connection of paid subscriptions and
          connection of push notifications. Work with animation and integration
          of the chat service.
          <br /> Stack: React Native, TypeScript, MobX, React Navigation, React
          Native Reanimated.
        </Text>
        <Text h2 size={22} weight="bold">
          2. Project description: The main idea of the project was to implement
          a guide and assistant for students who came to study. <br />
          Product: UK company. <br />
          Project team size: 5 team members.
          <br /> My work (Achievements): It was developed and integrated.
          Registration, Navigation and connecting maps for navigation, working
          with third-party services from the client, connecting them to the
          project, working with component animations, connecting push
          notifications and push navigation. <br />
          Stack: React Native, TypeScript, MobX, React Navigation, React Native
          Reanimated.
        </Text>
        <Text h2 size={22} weight="bold">
          3. Project description: The main idea of the project was to implement
          a service to simplify the calculation of car loan payments. <br />
          Product: USA company. <br />
          Project team size: 3 team members. <br /> My work (Achievements): It
          was developed and integrated. Registration, processing of calculations
          through the web service, working with third-party services from the
          client, connecting them to the project, connecting push notifications.
          <br />
          Stack: React Native, TypeScript, MobX, React Navigation, React Native
          Reanimated.
        </Text>
        <Text h2 size={22} weight="bold">
          4. Project description: The main idea of the project was to implement
          a product catalog for a company that works without the Internet.
          <br />
          Product: UA, KZ company. <br />
          Project team size: 5 team members. <br />
          My work (Achievements): It was developed and integrated.
          Implementation of data loading at the first login to the application
          and caching of this data, caching of pictures on two mobile platforms,
          saving of data on the phone and subsequent sorting and searching of
          this data. Developed navigation and state manager. <br />
          Stack: React Native, TypeScript, MobX, React Navigation, React Native
          Reanimated.
        </Text>
        <Text h2 size={25} weight="bold">
          5. Project description: The main idea of the project was to implement
          a website for the company. <br />
          Product: UA company. <br />
          Project team size: 4 team members. <br />
          My work (Achievements): It was developed and integrated.
          Implementation of navigation connecting third-party APIs for
          displaying information, development of mobile and desktop layouts.
          <br />
          Stack: React.js, Next.js, TypeScript, Strapi.js(Node.js), Redux,
          Axios-http.
        </Text>
        <Text h2 size={30} weight="bold">
          Frontend Developer (2020 - 2021)
          <br /> I work as a developer in the company Tropical Fish Store.
          <br />
          Skills: • JavaScript • CSS, SCSS, SASS • HTML • WordPress • Git •
          Figma.
        </Text>
        <Text h2 size={25} weight="bold">
          Projects on which I worked in the company: <br /> Project description:
          The main idea of the project was to implement a website for the
          company. <br />
          Product: UA company. <br />
          Project team size: 2 team members. <br /> My work (Achievements):
          Developed the site template and integration of plugins, also filled
          the site with the company's products. <br />
          Stack: JavaScript • CSS, SCSS, SASS • HTML • WordPress • Git • Figma.
        </Text>
      </WrapperMyWork>
    </div>
  );
};

export default MyWorkPage;
