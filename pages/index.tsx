import { Hero, Posts, Projects } from '@/components'
import { getLatestPostsTop5 } from '@/utils/post'
import type { GetStaticProps } from 'next'

const Home = ({ posts }: { posts: Post[] }) => {
  return (
    <div className={'w-full h-full'}>
      <Hero />
      <Projects />
      <Posts posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLatestPostsTop5()

  return {
    props: {
      posts
    }
  }
}

export default Home
