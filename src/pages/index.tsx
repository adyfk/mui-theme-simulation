import type { NextPage } from "next";
import Head from "next/head";
import dynamic from "next/dynamic";
// import Image from 'next/image';

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

      <main>
        <MonacoEditor />
      </main>
    </div>
  );
};

export default Home;
