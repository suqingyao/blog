import React from 'react'

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar = ({ children }: NavbarProps) => {
  return <nav className={'sticky top-0 h-12'}>navbar</nav>
}

export default Navbar
