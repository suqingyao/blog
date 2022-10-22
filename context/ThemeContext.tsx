import { Theme } from '@/types'
import { useStorage } from '@/utils'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  useEffect(() => {
    setTheme(() => {
      const theme = useStorage().get(useThemeKey())
      switch (theme) {
        case Theme.LIGHT:
          return Theme.LIGHT
        case Theme.DARK:
          return Theme.DARK
        default:
          return Theme.LIGHT
      }
    })
  }, [])

  const toggleTheme = () => {
    setTheme(theme => {
      switch (theme) {
        case Theme.LIGHT:
          document.documentElement.classList.toggle('dark', true)
          return Theme.DARK
        case Theme.DARK:
          document.documentElement.classList.toggle('dark', false)
          return Theme.LIGHT
        default:
          document.documentElement.classList.toggle('dark', false)
          return Theme.LIGHT
      }
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme: useMemo(() => theme, [theme])
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export const useThemeKey = () => 'theme'
