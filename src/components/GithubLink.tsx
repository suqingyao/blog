import config from '@/config'
import Link from 'next/link'
import React from 'react'

function GithubLink() {
  const repo = config.name

  return (
    <div className="text-lg flex items-center dark:text-white hover:cursor-pointer">
      <Link href={`https://github.com/${repo}`} target="_blank">
        <div className="i-ri-github-line" />
      </Link>
    </div>
  )
}

export default React.memo(GithubLink)
