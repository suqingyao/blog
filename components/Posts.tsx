import { Post } from '@/types'
import { format } from 'date-fns'
import Link from 'next/link'

interface PostsProps {
  posts: Post[]
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span className="outfit flex-1">Latest Posts</span>
        <Link href="/PostList">
          <div className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
            <div className="m-2 i-ri-arrow-right-up-line"></div>
          </div>
        </Link>
      </h2>
      <div className="grid grid-cols-1 -mx-2">
        {posts.map(post => (
          <PostItem key={post.title} post={post} />
        ))}
      </div>
    </>
  )
}

export function PostItem({ post }: { post: Post }) {
  return (
    <a
      className="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
      href={post.slug}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex-1">{post.title}</div>
      <div className="hidden sm:block op-40 font-normal">
        {format(post.published, 'yyyy-MM-dd')}
      </div>
    </a>
  )
}
