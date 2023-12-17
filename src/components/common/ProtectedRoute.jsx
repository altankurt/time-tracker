import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const auth = getAuth();

  return children;
}

export default ProtectedRoute;
