import Link from 'next/link'
import React from 'react'

export interface GithubLinkProps {
  repo: string
}

const GithubLink = ({ repo }: GithubLinkProps) => {
  return (
    <div className="text-lg flex items-center dark:text-white hover:cursor-pointer">
      <Link href={`https://github.com/${repo}`} target="_blank">
        <div className="i-ri-github-line" />
      </Link>
    </div>
  )
}

export default React.memo(GithubLink)
