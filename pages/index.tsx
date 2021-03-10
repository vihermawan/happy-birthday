import Head from 'next/head';
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import Prolouge from "../components/Prolouge";
import Achievement from "../components/Achievement";
import Gallery from "../components/Gallery";
import Song from "../components/Song";

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
        <Achievement />
        <Gallery />
        <Song />
      </Layout>
    </>
  )
}
