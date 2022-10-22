import { Post } from '@/types'

export function usePosts() {
  const posts: Post[] = [
    {
      title: 'hello',
      path: '/hello',
      date: new Date().getTime().toString(),
      desc: 'hello world'
    }
  ]
  return {
    posts
  }
}
