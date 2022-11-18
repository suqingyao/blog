import classNames from 'classnames'
import Link, { LinkProps } from 'next/link'
import React from 'react'

interface AppLinkProps extends LinkProps {
  className?: string
  children?: React.ReactNode
}

const AppLink = ({ className, children, ...rest }: AppLinkProps) => {
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
