import React from 'react'
import Link from 'next/link'
import ToggleTheme from '@/components/ToggleTheme'
import GithubLink from '@/components/GithubLink'

interface LinkProps {
  url: string
  title: string
  icon?: string
}

const Navbar = () => {
  const linkList: LinkProps[] = [
    // {
    //   url: 'https://github.com/cullyfung',
    //   title: 'Projects',
    //   icon: 'i-ri-lightbulb-line md:hidden'
    // },
    {
      url: '/PostList',
      title: 'Blog',
      icon: 'i-ri-article-line md:hidden'
    }
  ]

  return (
    <nav
      className={
        'sticky top-0 h-12 flex items-center justify-between px-10 backdrop-blur-sm bg-white/30 dark:bg-[#212121]/30'
      }
    >
      <div className="flex items-center">
        <Link href="/">
          <i className="i-twemoji-melting-face text-lg"> </i>
        </Link>
      </div>
      <div className="flex justify-end gap-3 align-center">
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
      </div>
    </nav>
  )
}

export default Navbar
