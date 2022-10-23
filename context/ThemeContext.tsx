import { Theme } from '@/types'
import { isEmptyValue, useStorage } from '@/utils'
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react'

interface ThemeContextProps {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const currentTheme = useRef<Theme>(Theme.LIGHT)

  const storage = useStorage()

  useEffect(() => {
    const theme = storage.get(StorageThemeKey)

    if (!isEmptyValue(theme)) {
      currentTheme.current = theme
    }
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
