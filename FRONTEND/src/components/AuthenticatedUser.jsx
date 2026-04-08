import { Navigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser';


const AuthenticatedUser = ({ children }) => {
  const { data: user } = useUser();

  const isAuthenticated = user;
  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return children;
}

export default AuthenticatedUser;