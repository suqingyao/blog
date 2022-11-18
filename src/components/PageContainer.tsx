import React, { PropsWithChildren } from 'react'

export interface PageContainerProps {}

export default function PageContainer({
  children
}: PropsWithChildren<PageContainerProps>) {
  return (
    <div
      className="w-full min-h-[calc(100vh-50px)] sm:min-h-[calc(100vh-80px)] max-w-[76ch] mx-auto"
      id="router"
    >
      {children}
    </div>
  )
}
