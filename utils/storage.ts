import { useEffect, useRef } from 'react'

export const useStorage = () => {
  let storage = useRef<Storage | undefined>(undefined)

  const get = (key: string) =>
    JSON.parse(window.localStorage?.getItem(key) as any)

  const set = <T>(key: string, value: T) =>
    window.localStorage?.setItem(key, JSON.stringify(value))

  useEffect(() => {
    storage.current = localStorage
  }, [])

  return {
    get,
    set,
    clear: storage.current?.clear(),
    remove: (key: string) => storage.current?.removeItem(key)
  }
}
