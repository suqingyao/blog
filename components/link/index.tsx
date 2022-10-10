import React from 'react'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

interface LinkProps {
  to: string
  children?: React.ReactNode
}

const Link = ({ to, children }: LinkProps) => {
  return (
    <a href={`${baseUrl}${to}`} onClick={event => event.preventDefault()}>
      {children}
    </a>
  )
}

export default Link
