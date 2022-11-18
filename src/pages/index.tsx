import type { GetStaticProps } from 'next'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Posts from '@/components/Posts'
import { getLatestPostsTop5 } from '@/utils/post'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export function Home({ posts }: { posts: Post[] }) {
  return (
    <div className={'w-full h-full'}>
      <Hero />
      <Projects />
      <Posts posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const posts = await getLatestPostsTop5()

  return {
    props: {
      posts,
      ...(await serverSideTranslations(locale!, ['common']))
    }
  }
}

export default Home
