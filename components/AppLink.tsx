import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import { PropsWithChildren } from 'react'

interface AppLinkProps {
  className?: string
}

const AppLink = ({
  className,
  children,
  ...rest
}: PropsWithChildren<AppLinkProps & LinkProps>) => {
  return (
    <Link {...rest}>
      <div
        className={classNames(className, 'hover:cursor-pointer flex flex-col')}
      >
        {children}
      </div>
    </Link>
  )
}

export default AppLink
