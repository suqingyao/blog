import { memo } from 'react'
import { GetStaticProps } from 'next'
import dayjs from 'dayjs'
import Link from 'next/link'
import { getLatestPosts } from '@/utils/post'

export interface PostsProps {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <div className="max-w-[80ch] w-full">
      {posts.map(({ frontmatter, slug }, idx) => (
        <div key={idx}>
          {(idx === 0 ||
            dayjs(posts[idx - 1].frontmatter.date).year() !==
              dayjs(frontmatter.date).year()) && (
            <div className="relative pointer-events-none h20">
              <span className="absolute font-bold top-6rem left--3rem text-8em opacity-10">
                {dayjs(frontmatter.date).year()}
              </span>
            </div>
          )}
          <article key={idx} className="my-8">
            <h3 className="text-lg sm:text-xl">
              <Link href={`/posts/${slug}`}>
                <a className="hover:text-emerald">{frontmatter.title}</a>
              </Link>
            </h3>
            <span className="font-medium inline-block text-sm mt-2 opacity-50">
              {dayjs(frontmatter.date).format('YYYY-MM-DD')}
            </span>
          </article>
        </div>
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
