import { Post } from '@/types'

export const usePosts = () => {
  const posts: Post[] = [
    {
      title: 'hello',
      date: new Date().getTime().toString(),
      path: '/hello'
    }
  ]
  return {
    posts
  }
}
