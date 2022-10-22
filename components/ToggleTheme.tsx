import React, { MouseEvent } from 'react'
import { useThemeContext } from '@/context/ThemeContext'

const ToggleTheme = () => {
  const { toggleTheme, isDark } = useThemeContext()

  const handleToggleTheme = (event: MouseEvent) => {
    event.preventDefault()
    toggleTheme()
  }

  return (
    <a
      onClick={handleToggleTheme}
      className="flex flex-col justify-center cursor-pointer text-lg">
      {isDark ? (
        <div className="i-ri-sun-line"></div>
      ) : (
        <div className="i-ri-moon-line"></div>
      )}
    </a>
  )
}

export default ToggleTheme
