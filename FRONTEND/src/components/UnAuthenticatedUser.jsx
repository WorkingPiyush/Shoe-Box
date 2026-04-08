import { Navigate } from 'react-router-dom'
import { useUser } from '../hooks/useUser';


const UnAuthenticatedUser = ({ children }) => {
    const { data: user } = useUser();
    if (!user) {
        return <Navigate to='/' replace />;
    }
    return children;
}

export default UnAuthenticatedUser;