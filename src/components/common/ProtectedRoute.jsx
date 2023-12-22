import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

function ProtectedRoute({ children, isRequiredAuth }) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const auth = getAuth()

  useEffect(() => {
    const logout = onAuthStateChanged(auth, (currentUser) => {
      setLoading(true)
      if (isRequiredAuth && !currentUser) {
        navigate('/login')
      } else if (!isRequiredAuth && currentUser) {
        navigate('/')
      }
    })
    setLoading(false)

    return () => logout()
  }, [isRequiredAuth, auth])

  return loading ? children : 'loading...'
}

export default ProtectedRoute
