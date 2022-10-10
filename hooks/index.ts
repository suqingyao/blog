import { useMemo, useState } from 'react'

export const index = () => {
  const [isDark, setIsDark] = useState(false)
  return useMemo(() => isDark, [isDark, setIsDark])
}
