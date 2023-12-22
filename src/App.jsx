import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import IndexPage from './pages/IndexPage'
import ProtectedRoute from './components/common/ProtectedRoute'
// import ToastContainer from './components/common/ToastContainer';

export default function App() {
  return (
    <Router>
      {/* <ToastContainer /> */}
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute isRequiredAuth={false}>
              <LoginPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute isRequiredAuth={false}>
              <RegisterPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute isRequiredAuth={true}>
              <IndexPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}
