import { usePosts } from '@/utils'
import Link from 'next/link'
import { format } from 'date-fns'
import React from 'react'

const PostList = () => {
  const { posts } = usePosts()
  return (
    <ul>
      {!posts.length ? <Empty /> : null}
      <div className="relative h20 pointer-events-none">
        <span className="text-8em op10 absolute left--3rem top--2rem font-bold">
          {posts.map(post => (
            <Link key={post.path} href={post.path}>
              <li className="no-underline">
                <div className="title text-lg leading-1.2em">
                  <span className="text-xs border rounded px-1 pb-0.2 md:ml--19 mr2 bg-lime/10 border-lime text-lime align-middle">
                    upcoming
                  </span>
                  <span className="align-middle">{post.title}</span>
                </div>
                <div className="time opacity-50 text-sm">
                  {format(+post.date, 'yyyy-MM-dd')}
                </div>
              </li>
            </Link>
          ))}
        </span>
      </div>
    </ul>
  )
}

const Empty = () => {
  return <div className="py-2 op50">nothing here yet</div>
}

export default React.memo(PostList)
