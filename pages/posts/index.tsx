import { AppLink } from '@/components'
import { getLatestPosts } from '@/utils/post'
import { animated, useSpring, useTrail } from '@react-spring/web'
import dayjs from 'dayjs'
import { GetStaticProps } from 'next'
import { memo } from 'react'

export interface PostsProps {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  const yearStyle = useSpring({
    from: {
      y: 100,
      opacity: 0
    },
    to: {
      y: 0,
      opacity: 1
    }
  })

  const trail = useTrail(posts.length, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 }
  })

  return (
    <div className="max-w-[80ch] w-full">
      {trail.map(({ y, ...rest }, idx) => (
        <animated.div
          key={idx}
          style={{ ...rest, transform: y.to(y => `translate3d(0,${y}px,0)`) }}
        >
          {(idx === 0 ||
            dayjs(posts[idx - 1].frontmatter.date).year() !==
              dayjs(posts[idx].frontmatter.date).year()) && (
            <animated.div
              className="relative pointer-events-none h20"
              style={yearStyle}
            >
              <span className="absolute font-bold top-6rem left--3rem text-8em opacity-10">
                {dayjs(posts[idx].frontmatter.date).year()}
              </span>
            </animated.div>
          )}
          <article key={idx} className="my-8">
            <h3 className="text-lg sm:text-xl">
              <AppLink href={`/posts/${posts[idx].slug}`}>
                <a className="hover:text-primary">
                  {posts[idx].frontmatter.title}
                </a>
              </AppLink>
            </h3>
            <span className="font-medium inline-block text-sm mt-2 opacity-50">
              {dayjs(posts[idx].frontmatter.date).format('YYYY-MM-DD')}
            </span>
          </article>
        </animated.div>
      ))}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getLatestPosts()
  return {
    props: {
      posts
    }
  }
}

export default memo(Posts)
