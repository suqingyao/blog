import React from 'react'
import { GithubLink } from '@/components'
import DarkModeToggle from './DarkModeToggle'
import AppLink from './AppLink'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { linkList } from '@/config'

export default function Navbar() {
  const router = useRouter()

  return (
    <header className="sticky top-0 text-center backdrop-blur-sm z-9999">
      <div className="flex justify-end gap-3 max-w-[80ch] mx-auto py-5">
        <div className="flex justify-end items-center gap-3">
          {linkList.map(link => (
            <AppLink
              key={link.title}
              href={link.url}
              className={classNames(
                { 'text-primary': link.url === router.route },
                'flex flex-col justify-center hover:text-primary'
              )}
            >
              <span className="lt-md:hidden">{link.title}</span>
              <div className={link.icon} />
            </AppLink>
          ))}
          <GithubLink />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
