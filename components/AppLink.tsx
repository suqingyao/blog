import Link, { LinkProps } from 'next/link'
import React from 'react'

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode
}

const AppLink = ({ children, ...rest }: AppLinkProps) => {
  return (
    <div className="hover:cursor-pointer">
      <Link {...rest}>
        <>{children}</>
      </Link>
    </div>
  )
}

export default AppLink
