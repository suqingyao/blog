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
  switch (theme) {
    case Theme.LIGHT:
      return <div className="i-ri-sun-line" />
    case Theme.DARK:
      return <div className="i-ri-moon-line" />
    default:
      return <div className="i-ri-sun-line" />
  }
}

export default ToggleTheme
