import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="dark:text-white text-2xl">
      404 Not Found
      <Link href="/">
        <div className="flex items-center text-base text-lime-5 hover:cursor-pointer hover:text">
          <i className="i-ri-arrow-left-line" />
          <p>Back Home</p>
        </div>
      </Link>
    </div>
  )
}

export default NotFoundPage
