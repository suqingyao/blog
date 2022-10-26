import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useRef } from 'react'
import { useEvent, useLocation, useMount } from 'react-use'
interface BlogProps {
  frontmatter: any
  children?: React.ReactNode
}

const Blog = ({ frontmatter, children }: BlogProps) => {
  const router = useRouter()
  const route = useLocation()
  const content = useRef<HTMLDivElement | null>(null)

  useMount(() => {
    const navigate = () => {
      if (location.hash) {
        document
          .querySelector(decodeURIComponent(location.hash))
          ?.scrollIntoView({ behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', navigate)
  })

  return (
    <>
      {(frontmatter.display || frontmatter.title) ?? (
        <div className="prose m-auto mb-8">
          <h1 className="mb-0">{frontmatter.display ?? frontmatter.title}</h1>
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

export default Blog
