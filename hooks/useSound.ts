import { ConfigContext } from '@/components/ConfigProvider'
import { useContext } from 'react'
import useSoundBase from 'use-sound'
import { HookOptions } from 'use-sound/dist/types'

function useSound<T = any>(url: string | string[], delegated?: HookOptions<T>) {
  const { soundEnabled } = useContext(ConfigContext)

  return useSoundBase(url, { soundEnabled, ...delegated })
}

export default useSound
