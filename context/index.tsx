import { ThemeProvider } from '@/context/theme-context'
import { ReactNode } from 'react'

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}
