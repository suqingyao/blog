import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'
import { parseISO } from 'date-fns'
import { serialize } from 'next-mdx-remote/serialize'
// remark-prism：markdown代码高亮
import prism from 'remark-prism'
// externalLinks：使markdown的链接是在新页面打开链接
import externalLinks from 'remark-external-links'

interface MatterMark {
  data: { date: string; title: string }
  content: string
  [key: string]: unknown
}

export const postsDir = path.join(process.cwd(), 'posts')

export const fileNames = fs.readdirSync(postsDir)

export function getSortedPostsData() {
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDir, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')
    const matterResult = matter(fileContents)

    return {
      id,
      ...(matterResult.data as MatterMark['data'])
    }
  })

  return allPostsData.sort(({ date: a }, { date: b }) =>
    parseISO(a) < parseISO(b) ? 1 : -1
  )
}

export function getAllPostIds() {
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDir, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf-8')
  const matterResult = matter(fileContents)
  return {
    content: await serialize(matterResult.content, {
      mdxOptions: { remarkPlugins: [prism, externalLinks] }
    }),
    ...(matterResult.data as MatterMark['data'])
  }
}
