
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectUser } from '../../redux/auth/selectors'
import { logoutThunk } from '../../redux/auth/operations';


const UserMenu = () => {
    const user = useSelector(selectUser);

    const dispatch = useDispatch();

    return (
        <>
            <div className='flex justify-between items-center gap-8 py-8 px-8 bg-gray-800 text-white font-semibold text-0.2xl uppercase'>
                <h2>Welcome, {user.name}!</h2>
                <nav className='flex justify-self-end gap-8 items-center'>

                    <NavLink to='/contacts'>Contacts</NavLink>

                    <button onClick={() => { dispatch(logoutThunk()) }} className='btn btn-outline btn-accent '>Log out</button>
                </nav >
            </div>
        </>
    )
}

export default UserMenu;