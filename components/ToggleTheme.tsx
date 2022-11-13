import React, { MouseEvent } from 'react'
import { useThemeContext } from '@/context/ThemeContext'
import { isDark } from '@/utils'

const ToggleTheme = () => {
  const { toggleTheme, theme } = useThemeContext()

  const handleToggleTheme = (event: MouseEvent) => {
    event.preventDefault()
    toggleTheme()
  }

  return (
    <a
      onClick={handleToggleTheme}
      className="flex flex-col justify-center cursor-pointer text-lg"
    >
      {isDark(theme) ? (
        <div className="i-ri-sun-line" />
      ) : (
        <div className="i-ri-moon-line" />
      )}
    </a>
  )
}

export default ToggleTheme
