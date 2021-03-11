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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="This Website is a gift ❤️"/>
      </Head>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="This Website is a gift ❤️"/>
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
