import Head from 'next/head';
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import Prolouge from "../components/Prolouge";
import Achievement from "../components/Achievement";

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Birthday-🎉</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Prolouge />
        <Achievement/>
      </Layout>
    </>
  )
}
