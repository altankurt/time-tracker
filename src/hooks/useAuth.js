import { getAuth, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const navigate = useNavigate()
  const auth = getAuth()

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => {
        console.error('Logout Error:', error)
      })
  }

  return { auth, handleLogout }
}

export default useAuth
