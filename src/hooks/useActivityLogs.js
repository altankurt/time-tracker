import { useState, useEffect } from 'react'
import { collection, doc, query, where, onSnapshot, deleteDoc } from 'firebase/firestore'
import { db } from '../../firebase-config'

const useActivityLogs = (userId) => {
  const [logs, setLogs] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'time_log'), where('author', '==', userId))

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newLogs = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      setLogs(newLogs.sort((a, b) => b.date - a.date))
    })

    return () => unsubscribe()
  }, [userId])

  const removeLog = async (logId) => {
    try {
      await deleteDoc(doc(db, 'time_log', logId))
      setLogs((currentLogs) => currentLogs.filter((log) => log.id !== logId))
    } catch (e) {
      console.error('Error removing document: ', e)
    }
  }

  return { logs, removeLog }
}

export default useActivityLogs
