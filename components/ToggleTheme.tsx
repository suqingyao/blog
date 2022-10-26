import React, { MouseEvent } from 'react'
import { useThemeContext } from '@/context/ThemeContext'
import { Theme } from '@/types'

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
      <Icon theme={theme} />
    </a>
  )
}

const Icon = ({ theme }: { theme: Theme }) => {
  if (theme === Theme.LIGHT) {
    return <div className="i-ri-sun-line" />
  } else {
    return <div className="i-ri-moon-line" />
  }
}

export default ToggleTheme
