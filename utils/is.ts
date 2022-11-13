import { Theme } from '@/types'
import { toString } from '.'

export const isEmptyValue = (value: any) => (value === false ? value : !!!value)

export const isLight = (value: Theme) => value === Theme.LIGHT

export const isDark = (value: any) => value === Theme.DARK

export const isBoolean = (value: any) => typeof value === 'boolean'

export const isObject = (obj: any) => toString(obj) === '[object Object]'

export const isArray = (obj: any) => Array.isArray(obj)

export const isString = (obj: any) => typeof obj === 'string'

export const isFunction = (obj: any) => typeof obj === 'function'

export const isFalsy = (obj: any) => {
  if (isBoolean(obj)) {
    return obj
  }
  if (isObject(obj) && !Object.keys(obj).length) {
    return true
  }
  if (isArray(obj) && !obj.length) {
    return true
  }
  if (isString(obj) && !obj.length) {
    return true
  }
  if (obj === undefined || obj === null) {
    return true
  }
  return false
}
