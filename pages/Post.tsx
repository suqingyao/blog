import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
interface PostProps {
  frontmatter: any
  children?: React.ReactNode
}

const Post = ({ frontmatter, children }: PostProps) => {
  const router = useRouter()
  const content = useRef<HTMLDivElement | null>(null)

  return (
    <>
      {frontmatter.title ?? (
        <div className="prose m-auto mb-8">
          <h1 className="mb-0">{frontmatter.title}</h1>
          {frontmatter.date ? (
            <p className="opacity-50 !-mt-2">
              {format(+frontmatter.date, 'yyyy-MM-dd')}{' '}
              {frontmatter.duration ? (
                <span>· {frontmatter.duration}</span>
              ) : null}
            </p>
          ) : null}

          {frontmatter.subtitle ? (
            <p className="opacity-50 !-mt-6 italic">{frontmatter.subtitle}</p>
          ) : null}
        </div>
      )}

      <article ref={content}>{children}</article>
    </>
  )
}

export default Post
