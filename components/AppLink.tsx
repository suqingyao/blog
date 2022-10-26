import Link, { LinkProps } from 'next/link'
import React from 'react'

interface AppLinkProps extends LinkProps {
  children?: React.ReactNode
}

const AppLink = ({ children, ...rest }: AppLinkProps) => {
  return (
    <Link {...rest}>
      <>{children}</>
    </Link>
  )
}

export default AppLink
