import { linkList } from '@/config'
import { useSpring } from '@react-spring/web'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import AppLink from './AppLink'
import DarkModeToggle from './DarkModeToggle'

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
          <DarkModeToggle />
        </div>
      </div>
    </header>
  )
}
