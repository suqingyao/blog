import Link, { LinkProps } from 'next/link'
import React from 'react'

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode
}

const AppLink = ({ children, ...rest }: AppLinkProps) => {
  return (
    <Link {...rest}>
      <div>{children}</div>
    </Link>
  )
}

export default AppLink
