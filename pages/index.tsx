import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Posts from '@/components/Posts'

const Home: NextPage = () => {
  return (
    <div className={'w-full h-full'}>
      <Head>
        <title>Cully Fung</title>
      </Head>
      <Hero />
      <Project />
      <Posts />
    </div>
  )
}

export default Home
