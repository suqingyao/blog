import { readFileSync } from 'fs-extra'
import { resolve } from 'pathe'
import glob from 'fast-glob'
import matter from 'gray-matter'
import { orderBy, take } from 'lodash'
import dayjs from 'dayjs'

export async function getAllPostPaths() {
  return await glob('posts/**/*.mdx')
}

export async function getLatestPosts({
  limit = Infinity,
  orderBy: order = 'desc'
}: {
  limit?: number
  orderBy?: 'asc' | 'desc'
} = {}) {
  const postsPath = await getAllPostPaths()
  const allPosts = await Promise.all(
    postsPath.map(async path => {
      const slug = path.replace(/^posts\/|\.mdx$/g, '')
      const frontmatter = await getPostFrontmatterBySlug(slug)

      return {
        path,
        slug,
        frontmatter
      }
    })
  )

  return take(
    orderBy(
      allPosts.filter(({ frontmatter }) => !frontmatter.draft),
      ({ frontmatter }) => dayjs(frontmatter.date).valueOf(),
      [order]
    ),
    limit
  )
}

export function getSlugByPostPath(postPath: string) {
  return postPath.replace(/^posts\/|\.mdx$/g, '')
}

export function getPostFrontmatterBySlug(slug: string) {
  const rawMdx = readFileSync(resolve(process.cwd(), `posts/${slug}.mdx`), {
    encoding: 'utf8'
  })
  return matter(rawMdx).data as Promise<PostFrontmatter>
}

export async function getAdjacentPosts(slug: string) {
  const posts = await getLatestPosts({ orderBy: 'asc' })
  const idx = posts.findIndex(post => post.slug === slug)
  const prevPosts = idx > 0 ? posts[idx - 1] : undefined
  const nextPosts =
    idx !== -1 && idx < posts.length - 1 ? posts[idx + 1] : undefined

  return {
    prev: prevPosts
      ? { slug: prevPosts.slug, frontmatter: prevPosts.frontmatter }
      : undefined,
    next: nextPosts
      ? { slug: nextPosts.slug, frontmatter: nextPosts.frontmatter }
      : undefined
  }
}

export async function getLatestPostsTop5() {
  return await getLatestPosts({ limit: 5 })
}
