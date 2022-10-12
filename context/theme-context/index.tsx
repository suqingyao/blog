import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

interface ThemeContextProps {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(prevState => {
      document.documentElement.classList.toggle('dark', !prevState)
      return !prevState
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDark: useMemo(() => isDark, [isDark])
      }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)
