import { animated, useSpring, useTrail } from '@react-spring/web'
import dayjs from 'dayjs'
import AppLink from './AppLink'

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  const titleStyle = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 }
  })

  const trail = useTrail(posts.length, {
    from: { opacity: 0, x: 100 },
    to: { opacity: 1, x: 0 }
  })
  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <animated.span className="flex-1" style={titleStyle}>
          Latest Posts
        </animated.span>
        <AppLink href="/posts">
          <div className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
            <div className="m-2 i-ri-arrow-right-up-line"></div>
          </div>
        </AppLink>
      </h2>
      <div className="flex flex-col gap-2">
        {trail.map(({ x, ...rest }, index) => (
          <animated.div
            key={posts[index]['path']}
            style={{ ...rest, transform: x.to(x => `translate3d(${x}px,0,0)`) }}
          >
            <Card post={posts[index]} />
          </animated.div>
        ))}
      </div>
    </>
  )
}

function Card({ post }: { post: Post }) {
  return (
    <AppLink
      href={`/posts/${post.slug}`}
      className="px-3 py-3 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
    >
      <div className="flex justify-between items-center">
        <div className="flex-1">{post.frontmatter.title}</div>
        <div className="hidden sm:block op-40 font-normal">
          {dayjs(post.frontmatter.date).format('YYYY-MM-DD')}
        </div>
      </div>
    </AppLink>
  )
}
