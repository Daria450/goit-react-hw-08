
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    if (!isLoggedIn) {
        // toast('Log in to see this page!')
        return (<Navigate to='/login' />)
    }
    return children;
}

export default PrivateRoute