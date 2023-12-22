import { useState, useEffect } from 'react'

function useTimer(initialState = false) {
  const [timerOn, setTimerOn] = useState(initialState)
  const [time, setTime] = useState(0)

  useEffect(() => {
    let interval = null

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [timerOn])

  return { timerOn, setTimerOn, time, setTime }
}

export default useTimer
