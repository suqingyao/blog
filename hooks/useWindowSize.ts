import { useRafState } from 'ahooks'
import isBrowser from 'ahooks/lib/utils/isBrowser'
import { useEffect } from 'react'

function useWindowSize() {
  const [state, setState] = useRafState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const onResize = () => {
      setState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
    onResize()

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return state
}

export default useWindowSize
