import Navbar from './Navbar'
import Footer from './Footer'
import React from 'react'
import Plum from './Plum'

interface LayoutProps {
  children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={'flex flex-col dark:prose-invert dark:text-white relative'}>
      <Navbar />
      <main className={'flex-1 px-6 py-10 max-w-[76ch] mx-auto xl:text-lg'}>
        {children}
      </main>
      <Footer />
      <Plum />
    </div>
  )
}

export default Layout
