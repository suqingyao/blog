import React from 'react'
import { GithubLink } from '@/components'
import DarkModeToggle from './DarkModeToggle'
import AppLink from './AppLink'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import { linkList } from '@/config'
import { animated, useSpring } from '@react-spring/web'

export default function Navbar() {
  const router = useRouter()

  const textLineStyle = useSpring({
    from: {
      width: '0%'
    },
    to: {
      width: '100%'
    },
    delay: 200
  })

  return (
    <header className="sticky top-0 text-center backdrop-blur-sm z-9999">
      <div className="flex justify-end gap-3 max-w-[80ch] mx-auto py-5">
        <div className="flex justify-end items-center gap-3">
          {linkList.map(link => (
            <div className="flex flex-col" key={link.title}>
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
              <animated.span
                style={textLineStyle}
                className={classNames(
                  'bg-pink-300 w-full rounded-full h-2px transition-opacity',
                  {
                    'opacity-100': link.url === router.route,
                    'opacity-0': link.url !== router.route
                  }
                )}
              />
            </div>
          ))}
          <GithubLink />
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
