import { Theme } from '@/types'
import { useStorage } from '@/utils'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef
} from 'react'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme = useRef<Theme>(Theme.LIGHT)

  const storage = useStorage()

  useLayoutEffect(() => {
    const theme = storage.get(StorageThemeKey)
    if (theme) {
      currentTheme.current = theme
    }
  })

  useEffect(() => {
    toggleTheme()
  }, [])

  const toggleTheme = () => {
    switch (currentTheme.current) {
      case Theme.LIGHT:
        currentTheme.current = Theme.DARK
        break
      case Theme.DARK:
        currentTheme.current = Theme.LIGHT
        break
      default:
        currentTheme.current = Theme.LIGHT
        break
    }
    storage.set(StorageThemeKey, currentTheme.current)
    document.documentElement.classList.toggle(
      'dark',
      Theme.DARK === currentTheme.current
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        theme: currentTheme.current
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export const StorageThemeKey = 'theme'
