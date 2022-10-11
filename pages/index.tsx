import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/hero'
import Project from '@/components/project'
import Posts from '@/components/posts'

const Home: NextPage = () => {
  return (
    <div className={'w-full h-full'}>
      <Head>
        <title>Cully Fung</title>
        <meta name="description" content="cully fung personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Project />
      <Posts />
    </div>
  )
}

export default Home
