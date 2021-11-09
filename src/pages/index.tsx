import type { NextPage } from "next";
import Head from "next/head";
import Main from "@/layout/main";

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
