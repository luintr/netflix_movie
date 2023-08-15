import { useEffect, useState } from 'react'

const useDebounce = (initialValue = '', delayTime = 1000) => {

    const [debounceValue, setDebounceValue] = useState(initialValue)
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(initialValue)
        }, delayTime)

        return () => {
            clearTimeout(timer)
        }
    }, [delayTime, initialValue])


    return debounceValue
}

export default useDebounce