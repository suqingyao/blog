import React from 'react'
import GithubLink from '@/components/GithubLink'
import DarkModeToggle from './DarkModeToggle'
import AppLink from './AppLink'

interface LinkProps {
  link: string
  title: string
  icon?: string
}

export default function Navbar() {
  const linkList: LinkProps[] = [
    {
      link: '/',
      title: 'Home',
      icon: 'i-ri:home-heart-line md:hidden'
    },
    {
      link: '/posts',
      title: 'Posts',
      icon: 'i-ri-article-line md:hidden'
    }
  ]

  return (
    <header className="sticky top-0 text-center backdrop-blur-sm">
      <div className="flex justify-end gap-3 max-w-[80ch] mx-auto py-5">
        <div className="flex justify-end items-center gap-3">
          {linkList.map(link => (
            <AppLink
              key={link.title}
              href={link.link}
              className="flex flex-col justify-center"
            >
              <span className="lt-md:hidden">{link.title}</span>
              <i className={link.icon} />
            </AppLink>
          ))}
          <GithubLink />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
