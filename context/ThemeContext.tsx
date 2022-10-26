import { Theme } from '@/types'
import { createContext, ReactNode, useContext } from 'react'
import { useLocalStorage, useMount } from 'react-use'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme, remove] = useLocalStorage<Theme>(
    ThemeKey,
    Theme.LIGHT
  )

  const toggleTheme = () => {
    setTheme(theme => {
      let current = Theme.LIGHT
      if (theme === Theme.LIGHT) {
        current = Theme.DARK
      }
      if (theme === Theme.DARK) {
        current = Theme.LIGHT
      }
      document.documentElement.classList.toggle('dark', current === Theme.DARK)
      return current
    })
  }

  useMount(() => {
    document.documentElement.classList.toggle('dark', theme === Theme.DARK)
  })

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

export const ThemeKey = 'theme'
