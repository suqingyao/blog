import Navbar from './Navbar'
import React from 'react'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col dark:prose-invert dark:text-white relative min-h-[calc(100vh-12rem)]">
      <Navbar />
      <main className={'flex-1 px-6 py-10 max-w-[80ch] mx-auto xl:text-lg'}>
        {children}
      </main>
    </div>
  )
}
