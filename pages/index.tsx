import { NextPage, GetStaticProps } from "next";
import Head from "next/head";

import { useEffect, useLayoutEffect } from "react";
import { Text } from "@nextui-org/react";
import "animate.css";
import Link from "next/link";

const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const Home: NextPage = () => {
  useIsomorphicEffect(() => {
    console.log("useIsomorphicEffect");
  }, []);

  return (
    <div className="animate__animated animate__fadeIn">
      <Head>
        <title>CV-Stolboviy</title>
        <meta name="description" content="CV-Stolboviy" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Text h1 size={50} weight="bold">
          SKILLS
        </Text>
        <Text h2 size={35} weight="bold">
          I am a web and mobile application developer.
        </Text>
        <Link
          href={"https://developer.mozilla.org/en-US/docs/Web/JavaScript"}
          target="_blank"
        >
          <Text h2 size={35} weight="bold">
            • JavaScript (ECMAScript (5,6))
          </Text>
        </Link>
        <Link href={"https://www.typescriptlang.org/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • TypeScript
          </Text>
        </Link>
        <Link
          href={
            "https://developer.mozilla.org/en-US/docs/Web/HTMLs/Web/JavaScript"
          }
          target="_blank"
        >
          <Text h2 size={30} weight="bold">
            • HTML5 • CSS, SCSS, SASS
          </Text>
        </Link>
        <Link href={"https://react.dev/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • React.js
          </Text>
        </Link>
        <Link href={"https://reactnative.dev/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • React Native
          </Text>
        </Link>
        <Link href={"https://reactnavigation.org/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • React Navigation
          </Text>
        </Link>
        <Link href={"https://www.reanimated2.com/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • React Native Reanimated
          </Text>
        </Link>
        <Link href={"https://firebase.google.com/"} target="_blank">
          <Text h2 size={30} weight="bold">
            • Firebase
          </Text>
        </Link>
        <Link
          href={"https://play.google.com/console/developers/"}
          target="_blank"
        >
          <Text h2 size={30} weight="bold">
            • Google Pay Console
          </Text>
        </Link>
        <Link href={"https://appstoreconnect.apple.com/"} target="_blank">
          <Text h2 size={30} weight="bold">
            • App Store Connect
          </Text>
        </Link>
        <Link href={"https://axios-http.com/docs/intro"} target="_blank">
          <Text h2 size={35} weight="bold">
            • Axios-http
          </Text>
        </Link>
        <Link href={"https://nextjs.org/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • Next.js
          </Text>
        </Link>
        <Link href={"https://strapi.io/"} target="_blank">
          <Text h2 size={30} weight="bold">
            • Strapi.js(NODE.JS), NODE.JS
          </Text>
        </Link>
        <Link href={"https://inversify.io/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • InversifyJS
          </Text>
        </Link>
        <Link href={"https://mobx.js.org/README.html"} target="_blank">
          <Text h2 size={35} weight="bold">
            • MobX
          </Text>
        </Link>
        <Link href={"https://redux.js.org/"} target="_blank">
          <Text h2 size={35} weight="bold">
            • ReduxJS (toolkit)
          </Text>
        </Link>
        <Text h2 size={30} weight="bold">
          • GULP, Webpack • GIT • Photoshop, Chrome DevTools, Figma
        </Text>
        <Link href={"https://jestjs.io/"} target="_blank">
          <Text h2 size={30} weight="bold">
            • Unit Testing Jest
          </Text>
        </Link>
        <Text h2 size={30} weight="bold">
          • JIRA, Slack, ChatGPT-OpenAI
        </Text>
        <Text h2 size={30} weight="bold">
          • Languages: Ukrainian (Native), English (B1) intermediate.
        </Text>
      </div>
    </div>
  );
};

export default Home;
