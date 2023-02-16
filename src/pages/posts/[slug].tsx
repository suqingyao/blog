import {
  AppLink,
  Blockquote,
  CodeBlock,
  CodePen,
  CodeSandbox,
  DarkModeToggle,
  HeroImage,
  ListItem,
  OrderedList,
  StackBlitz,
  UnorderedList,
  YouTube
} from '@/components'
import TableOfContents, {
  TableOfContentsProps
} from '@/components/TableOfContents'
import remarkMdxMetaToProps from '@/lib/remark-mdx-meta-to-props.js'
import remarkNoteBlock from '@/lib/remark-note-block.js'
import {
  getAdjacentPosts,
  getAllPostPaths,
  getSlugByPostPath
} from '@/utils/post'
import dayjs from 'dayjs'
import { bundleMDX } from 'mdx-bundler'
import { getMDXComponent, getMDXExport } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import path from 'path'
import { DependencyList, useEffect, useMemo, useState } from 'react'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import remarkDirective from 'remark-directive'
import remarkGfm from 'remark-gfm'
import remarkReadingTime from 'remark-reading-time'
import remarkReadingMdxTime from 'remark-reading-time/mdx'

const components = {
  code: CodeBlock,
  blockquote: Blockquote,
  Image,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  DarkModeToggle,
  YouTube,
  StackBlitz,
  CodeSandbox,
  CodePen
}

function useHeadings(deps: DependencyList = []) {
  const [headings, setHeadings] = useState<TableOfContentsProps['headings']>([])

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll(
        '.markdown-body > h2, .markdown-body > h3, .markdown-body > h4, .markdown-body > h5, .markdown-body > h6'
      )
    )
      .filter(element => element.id)
      .map(element => ({
        id: element.id,
        text: element.textContent ?? '',
        level: Number(element.tagName.substring(1))
      }))
    setHeadings(elements)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return headings
}

export interface PostProps {
  slug: string
  code: string
  frontmatter: PostFrontmatter
  prevPost?: { link: string; title: string }
  nextPost?: { link: string; title: string }
}

export default function Post(props: PostProps) {
  const {
    code,
    frontmatter: {
      title,
      date,
      updateOn,
      toc = true,
      heroImage,
      heroImageAspectRatio = '16 / 9'
    },
    prevPost,
    nextPost
  } = props
  const headings = useHeadings([code])
  const Component = useMemo(() => getMDXComponent(code), [code])
  const { readingTime } = useMemo(
    () => getMDXExport<{ readingTime: ReadingTime }, unknown>(code),
    [code]
  )

  return (
    <div className="container break-all">
      <h1 className="mt-14 sm:mt-16 text-2xl sm:text-4xl !leading-snug tracking-tight font-medium">
        {title}
      </h1>
      {/* 最后更新时间 */}
      <div className="text-gray-500 dark:text-gray-300 mt-4">
        <div className="flex items-center text-sm">
          <span className="flex items-center">
            <div className="i-heroicons-outline:clock mr-1 text-lg" />
            {/* {t('post-page.last-updated')} */}
            {dayjs(updateOn || date).format('YYYY-MM-DD')} • {readingTime.text}
          </span>
        </div>
      </div>
      <div className="relative flex w-full">
        <div className="flex-1 w-0">
          {/* 文章顶部图片 */}
          {heroImage && (
            <HeroImage
              className="mt-6"
              src={heroImage}
              aspectRatio={heroImageAspectRatio}
            />
          )}
          {/* markdown 内容 */}
          <article className="markdown-body w-full mt-10">
            {/* @ts-ignore */}
            <Component components={components} />
          </article>
        </div>
        {/* 侧边目录导航 */}
        {toc && headings.length > 0 && (
          <TableOfContents className="hidden sm:block" headings={headings} />
        )}
      </div>
      <hr className="divider" />
      <div className="mb-20 flex justify-between space-x-6 sm:space-x-12 sm:text-lg font-medium">
        {/* 下一篇 */}
        <span className="w-1/2">
          {prevPost ? (
            <AppLink href={prevPost.link}>
              <a className="group flex h-full border border-zinc-400/20 rounded-xl p-3 sm:p-6 transition gap-2">
                <div className="i-heroicons-outline:arrow-sm-left sm:-mt-[1px] shrink-0 text-2xl sm:text-3xl text-primary transition ease-out-back duration-500 sm:group-hover:-translate-x-2" />
                {prevPost.title}
              </a>
            </AppLink>
          ) : null}
        </span>
        {/* 上一篇 */}
        <span className="w-1/2 text-right">
          {nextPost ? (
            <AppLink href={nextPost.link}>
              <a className="group flex justify-end h-full border border-zinc-400/20 rounded-xl p-3 sm:p-6 transition gap-2">
                {nextPost.title}
                <div className="i-heroicons-outline:arrow-sm-right sm:-mt-[1px] shrink-0 text-2xl sm:text-3xl text-primary transition ease-out-back duration-500 sm:group-hover:translate-x-2" />
              </a>
            </AppLink>
          ) : null}
        </span>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const paths = await getAllPostPaths()

  return {
    paths: paths.map(p => ({
      params: { slug: getSlugByPostPath(p) }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps<any, { slug: string }> = async ({
  params
}) => {
  const { slug } = params!
  const { code, frontmatter } = await bundleMDX({
    file: path.resolve(process.cwd(), `./posts/${slug}.mdx`),
    cwd: path.resolve(process.cwd(), './posts'),
    mdxOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkGfm,
        remarkMdxMetaToProps,
        remarkDirective,
        remarkNoteBlock,
        remarkReadingTime,
        remarkReadingMdxTime
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          { behavior: 'wrap', properties: { class: 'anchor' } }
        ]
      ]

      return options
    },
    esbuildOptions(options, frontmatter) {
      options.target = ['es2015']

      return options
    }
  })

  const { prev, next } = await getAdjacentPosts(slug)

  return {
    props: {
      code,
      frontmatter,
      prevPost: prev
        ? { link: `/posts/${prev.slug}`, title: prev.frontmatter.title }
        : null,
      nextPost: next
        ? { link: `/posts/${next.slug}`, title: next.frontmatter.title }
        : null
    }
  }
}
