import Link from 'next/link'
import dayjs from 'dayjs'

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span className="outfit flex-1">Latest Posts</span>
        <Link href="/posts">
          <div className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
            <div className="m-2 i-ri-arrow-right-up-line"></div>
          </div>
        </Link>
      </h2>
      <div className="grid grid-cols-1 -mx-2">
        {posts.map(post => (
          <PostCard key={post.path} post={post} />
        ))}
      </div>
    </>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <a
      className="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
      href={`/post/${post.slug}`}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex-1">{post.frontmatter.title}</div>
      <div className="hidden sm:block op-40 font-normal">
        {dayjs(post.frontmatter.date).format('YYYY-MM-DD')}
      </div>
    </a>
  )
}
