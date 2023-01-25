import Link from 'next/link'
import dayjs from 'dayjs'
import AppLink from './AppLink'

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span className="flex-1">Latest Posts</span>
        <AppLink href="/posts">
          <div className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
            <div className="m-2 i-ri-arrow-right-up-line"></div>
          </div>
        </AppLink>
      </h2>
      <div className="grid grid-cols-1 -mx-2">
        {posts.map(post => (
          <Card key={post.path} post={post} />
        ))}
      </div>
    </>
  )
}

function Card({ post }: { post: Post }) {
  return (
    <AppLink
      href={`/posts/${post.slug}`}
      className="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
    >
      <div className="flex-1">{post.frontmatter.title}</div>
      <div className="hidden sm:block op-40 font-normal">
        {dayjs(post.frontmatter.date).format('YYYY-MM-DD')}
      </div>
    </AppLink>
  )
}
