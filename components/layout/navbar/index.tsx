import React from 'react'
import Link from 'next/link'
import ToggleTheme from '@/components/toggle-theme'
import GithubLink from '@/components/github-link'

interface LinkProps {
  url: string
  title: string
  icon?: string
}

const Navbar = () => {
  const linkList: LinkProps[] = [
    {
      url: '/projects',
      title: 'Projects',
      icon: 'i-ri-lightbulb-line md:hidden'
    },
    {
      url: '/posts',
      title: 'Blog',
      icon: 'i-ri-article-line md:hidden'
    }
  ]

  return (
    <nav
      className={
        'sticky top-0 h-12 flex justify-end gap-3 align-center px-10 backdrop-blur-sm bg-white/30 dark:bg-[#212121]/30'
      }>
      {linkList.map(link => (
        <Link key={link.url} href={link.url}>
          <div className="flex flex-col justify-center cursor-pointer">
            <span className="lt-md:hidden">{link.title}</span>
            <div className={link.icon} />
          </div>
        </Link>
      ))}
      <GithubLink repo="cullyfung" />
      <ToggleTheme />
    </nav>
  )
}

export default Navbar
