import { createStorage, useStorage } from '@/utils'
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'

interface ThemeContextProps {
  isDark: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextProps>({
  isDark: false
} as ThemeContextProps)

ThemeContext.displayName = 'ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    setIsDark(useStorage().get(useThemeKey()) || false)
  }, [])

  const toggleTheme = () => {
    setIsDark(prevState => {
      document.documentElement.classList.toggle('dark', !prevState)
      useStorage().set(useThemeKey(), !prevState)
      console.log(11111)

      return !prevState
    })
  }

  return (
    <ThemeContext.Provider
      value={{
        toggleTheme,
        isDark: useMemo(() => isDark, [isDark])
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => useContext(ThemeContext)

export const useThemeKey = () => 'theme'
