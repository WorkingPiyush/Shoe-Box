import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';


const PublicRouteG = ({ children }) => {
  const { user } = useContext(UserContext);
  
  const isAuthenticated = user;
  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return children;
}

export default PublicRouteG;