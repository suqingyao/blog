import React from 'react'

export interface GithubLinkProps {
  repo: string
}

const GithubLink = ({ repo }: GithubLinkProps) => {
  return (
    <div className="flex items-center">
      <a
        href={`https://github.com/${repo}`}
        target="_blank"
        className="opacity-50 ml-1"
        rel="noreferrer">
        <div className="i-ri-github-fill text-lg dark:text-white" />
      </a>
    </div>
  )
}

export default React.memo(GithubLink)
