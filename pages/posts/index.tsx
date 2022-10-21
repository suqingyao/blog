import Link from 'next/link'

interface PostsProps {
  type: string
  posts: Post[]
}

export interface Post {
  path: string
  title: string
  date: string
  lang?: string
  desc?: string
  platform?: string
  duration?: string
  recording?: string
  upcoming?: boolean
}

const Posts = () => {
  const posts: Post[] = [
    {
      path: 'hello',
      title: 'hello',
      date: '2022-10-24'
    }
  ]
  return (
    <ul>
      {!posts.length ? <Empty /> : null}
      <div className="relative h20 pointer-events-none">
        <span className="text-8em op10 absolute left--3rem top--2rem font-bold">
          <Link href="">
            <li className="no-underline">
              <div className="title text-lg leading-1.2em">
                <span className="text-xs border border-current rounded px-1 pb-0.2 md:ml--10.5 mr2  align-middle">
                  中文
                </span>
                <span className="text-xs border rounded px-1 pb-0.2 md:ml--19 mr2 bg-lime/10 border-lime text-lime align-middle">
                  upcoming
                </span>
                <span className="align-middle">{`route.title`}</span>
                <span
                  className="i-ri-movie-line align-middle mx1 text-red5"
                  title="Has recording playback"
                />
              </div>
              <div className="time opacity-50 text-sm">
                {`{ formatDate(route.date) }`}
                <span className="op80">· {`{ route.duration }`}</span>
                <span className="op80">· {`{ route.platform }`}</span>
              </div>
            </li>
          </Link>
        </span>
      </div>
    </ul>
  )
}

const Empty = () => {
  return <div className="py-2 op50">nothing here yet</div>
}

export default Posts
