import { isDark } from '@/utils/is'
import { createContext, ReactNode, useContext, useEffect } from 'react'
import { useLocalStorage } from 'react-use'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<Theme>(ThemeKey, Theme.LIGHT)

  const toggleTheme = () => {
    if (isDark(theme)) {
      setTheme(Theme.LIGHT)
    } else {
      setTheme(Theme.DARK)
    }
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark(theme))
  }, [theme])

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme: theme || Theme.LIGHT
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeKey = 'blog-theme'
