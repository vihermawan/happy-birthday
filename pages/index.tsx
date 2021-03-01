import Head from 'next/head';
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>Happy Birthday-🎉</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <About />
      </Layout>
    </>
  )
}
