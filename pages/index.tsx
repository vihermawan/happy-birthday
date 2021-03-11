import Head from 'next/head';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('../components/Layout/Layout'))
const Hero = dynamic(() => import('../components/Hero'))
const Prolouge = dynamic(() => import('../components/Prolouge'))
const Achievement = dynamic(() => import('../components/Achievement'))
const Gallery = dynamic(() => import('../components/Gallery'))
const Song = dynamic(() => import('../components/Song'))

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
