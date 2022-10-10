import dayjs from 'dayjs'

interface PostMeta {
  id: string
  title: string
  url: string
  published_at: string
}

interface PostProps {
  data: PostMeta
}

const Posts = () => {
  const postList: PostMeta[] = [
    {
      id: '1',
      title: 'hello',
      url: 'http://localhost:3000',
      published_at: String(new Date())
    }
  ]
  const openLink = () => {
    window.open('https://notes.ljl.li', '_blank')
  }
  return (
    <>
      <h2 className="flex items-center mt-14 mb-4 font-semibold text-3xl">
        <span className="outfit flex-1">Latest Posts</span>
        <div
          onClick={openLink}
          className="op-50 ml-2 hover:op-100 transition-opacity cursor-pointer">
          <div className="m-2 i-ri-arrow-right-up-line"></div>
        </div>
      </h2>
      <div className="grid grid-cols-1 -mx-2">
        {postList.map((post, index) => (
          <PostItem key={index} data={post} />
        ))}
      </div>
    </>
  )
}

const PostItem = (props: PostProps) => {
  const { data } = props
  return (
    <a
      className="flex px-3 py-2 mt-2 mr-2 rounded-md transition-colors decoration-none hover:bg-gray-100 dark:hover:bg-gray-50/10"
      href={data.url}
      target="_blank"
      rel="noreferrer">
      <div className="flex-1">{data.title}</div>
      <div className="hidden sm:block op-40 font-normal">
        {dayjs(data.published_at).format('YYYY-MM-DD')}
      </div>
    </a>
  )
}

export default Posts
