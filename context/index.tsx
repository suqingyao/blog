import { ThemeProvider } from '@/context/ThemeContext'
import { ReactNode } from 'react'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
