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
    switch (theme) {
      case Theme.LIGHT:
        setTheme(() => {
          document.documentElement.classList.toggle('dark', true)
          return Theme.DARK
        })
        break
      case Theme.DARK:
        setTheme(() => {
          document.documentElement.classList.toggle('dark', false)
          return Theme.LIGHT
        })
        break
      default:
        setTheme(() => {
          document.documentElement.classList.toggle('dark', false)
          return Theme.LIGHT
        })
        break
    }
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
