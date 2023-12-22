import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'
import useActivityLogs from '../hooks/useActivityLogs'
import { useAuth } from '../hooks/useAuth'
import useTimer from '../hooks/useTimer'
import { formatTime } from '../utils/formatTime'
import { formatDate } from '../utils/formatDate'

const IndexPage = () => {
  const { time, setTime, timerOn, setTimerOn } = useTimer()
  const [taskDescription, setTaskDescription] = useState('')
  const { auth, handleLogout } = useAuth()
  const userID = auth.currentUser?.uid
  const { logs, removeLog } = useActivityLogs(userID)

  const handleStop = async () => {
    setTimerOn(false)

    if (time >= 1000) {
      const description = taskDescription || '-'

      try {
        await addDoc(collection(db, 'time_log'), {
          author: userID,
          description,
          time,
          date: new Date()
        })
      } catch (e) {
        console.error('Error adding document: ', e)
      }
    }
    setTime(0)
    setTaskDescription('')
  }

  const handleDelete = async (logId) => {
    await removeLog(logId)
  }

  return (
    <div className="container mx-auto px-12 py-4">
      <nav className="flex items-center justify-between p-4">
        <h1 className="header-title">TimeTune</h1>
        <button
          onClick={handleLogout}
          className="rounded-md bg-secondary px-4 py-2 font-medium text-light hover:bg-primary">
          Logout
        </button>
      </nav>

      <div className="flex flex-col items-center space-y-4 text-dark">
        <div className="font-sans text-6xl font-medium">
          {('0' + Math.floor((time / 3600000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
          {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        </div>
        <input
          type="text"
          className="border-light-900 w-2/5 border p-2 text-center"
          placeholder="What are you working on?"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        {!timerOn && time === 0 ? (
          <button
            onClick={() => setTimerOn(true)}
            className="rounded bg-secondary px-4 py-2 font-medium text-light hover:bg-primary">
            Start
          </button>
        ) : (
          <div className="flex space-x-2">
            <button
              onClick={() => setTimerOn(!timerOn)}
              className="rounded bg-yellow-500 px-4 py-2 font-medium text-light hover:bg-yellow-600">
              {timerOn ? 'Pause' : 'Continue'}
            </button>
            <button
              onClick={handleStop}
              className="rounded-md bg-secondary px-4 py-2 font-medium text-light hover:bg-primary">
              Stop
            </button>
          </div>
        )}
      </div>

      <div className="text-dark-900 mt-8">
        <h2 className=" text-2xl font-bold text-primary ">Tracked Activities</h2>
        <div className="overflow-auto">
          <table className="border-light-900 w-full border-collapse border text-center">
            <thead>
              <tr className="bg-light">
                <th className="border-light-900 border px-4 py-2">Description</th>
                <th className="border-light-900 border px-4 py-2">Time</th>
                <th className="border-light-900 border px-4 py-2">Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {logs.map((log, index) => (
                <tr key={index} className="border border-light">
                  <td className="px-4 py-2">{log.description}</td>
                  <td className="px-4 py-2">{formatTime(log.time)}</td>
                  <td className="px-4 py-2">{formatDate(log.date)}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(log.id)}
                      className="rounded-md bg-secondary px-4 py-2 font-medium text-light hover:bg-primary">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
