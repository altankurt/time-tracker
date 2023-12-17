import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import IndexPage from './pages/IndexPage';
import ProtectedRoute from './components/common/ProtectedRoute';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const logout = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return logout;
  }, [auth]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/index" element={<IndexPage />} />
        
        <Route 
          path="/index" 
          element={
            <ProtectedRoute>
              <IndexPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/" 
          element={currentUser ? <Navigate replace to="/index" /> : <Navigate replace to="/login" />} 
        />
      </Routes>
    </Router>
  );
}
