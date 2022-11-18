import React from 'react'
import { GetStaticProps } from 'next'
import dayjs from 'dayjs'
import Link from 'next/link'
import { getLatestPosts } from '@/utils/post'

export interface PostsProps {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <div className="flex-1">
      {posts.map(({ frontmatter, slug }, idx) => (
        <div key={idx}>
          {(idx === 0 ||
            dayjs(posts[idx - 1].frontmatter.date).year() !==
              dayjs(frontmatter.date).year()) && (
            <h2 className="font-medium text-2xl sm:text-3xl before:content-['#_'] before:text-primary">
              {dayjs(frontmatter.date).year()}
            </h2>
          )}
          <article key={idx} className="my-8">
            <h3 className="text-lg sm:text-xl">
              <Link href={`/posts/${slug}`}>
                <a className="hover:text-primary">{frontmatter.title}</a>
              </Link>
            </h3>
            <span className="font-medium inline-block text-sm mt-2 opacity-50">
              {dayjs(frontmatter.date).format('LL')}
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

export default React.memo(Posts)
