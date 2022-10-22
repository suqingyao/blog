export const useStorage = () => {
  const storage = createStorage()

  const get = (key: string) => JSON.parse(storage?.getItem(key) as any)

  const set = <T>(key: string, value: T) => {
    storage?.setItem(key, JSON.stringify(value))
  }

  return {
    get,
    set,
    clear: storage?.clear(),
    remove: (key: string) => storage?.removeItem(key)
  }
}

export function createStorage() {
  if (window) {
    return window.localStorage
  }
  return null
}
