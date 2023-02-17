import { createContext, FC, PropsWithChildren, useState } from 'react'

export interface ConfigProviderProps {}

export interface ConfigContext {
  soundEnabled?: boolean
  setSoundEnabled?: (enabled: boolean) => void
}

export const ConfigContext = createContext({} as ConfigContext)

const ConfigProvider: FC<PropsWithChildren<ConfigProviderProps>> = props => {
  const { children } = props
  const [soundEnabled, setSoundEnabled] = useState(true)

  return (
    <ConfigContext.Provider value={{ soundEnabled, setSoundEnabled }}>
      {children}
    </ConfigContext.Provider>
  )
}

export default ConfigProvider
