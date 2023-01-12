import Head from 'next/head'
import {HomePage} from "../src/components/home/home-page";

// This is server side generation - use this when we need to RENDER AT RUNTIME
export const getServerSideProps = async () => {
  const data = await import('../data/data.json')
  return {
    props: {
      data: data.events_categories
    }
  }
}

export const Home = ({data}: any) => (
  <div>
    <Head>
      <title>HomePage</title>
      <meta name="description" content="Generated by create next app"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.ico"/>
    </Head>
    <HomePage data={data}/>
  </div>
);

export default Home
