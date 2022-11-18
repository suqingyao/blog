import { useEffect } from 'react'
import useLatest from '@/hooks/useLatest'

const useUnmount = (fn: () => any) => {
  const fnRef = useLatest(fn)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => fnRef.current, [])
}

export default useUnmount
