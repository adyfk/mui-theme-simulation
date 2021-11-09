import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
import Main from "@/layout/main";

const MonacoEditor = dynamic(() => import("../components/monaco-editor"), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mui Theme Simulation</title>
        <meta name="description" content="Mui Theme Simulation" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>Customize your theme and see possibility</Main>
    </div>
  );
};

export default Home;
