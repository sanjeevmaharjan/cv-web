import {useEffect, useState} from 'react'

export const usePromiseResult = <T>(
  arg: Promise<T> | (() => Promise<T>),
): T | undefined => {
  const [result, setResult] = useState<T | undefined>()

  useEffect(() => {
    let promise: Promise<T>
    if (typeof arg === 'function') {
      promise = arg()
    } else {
      promise = arg
    }

    promise.then(setResult).catch((error) => {
      throw error
    })
  }, [])

  return result
}
