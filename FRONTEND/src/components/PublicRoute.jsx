import { Navigate } from 'react-router-dom'
import { useContext } from 'react';
import { useUser } from '../hooks/useUser';


const PublicRouteG = ({ children }) => {
  const { data: user } = useUser();

  const isAuthenticated = user;
  console.log(isAuthenticated)
  if (isAuthenticated) {
    return <Navigate to='/' replace />;
  }
  return children;
}

export default PublicRouteG;