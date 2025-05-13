

import { NavLink } from 'react-router-dom'


const AuthNav = () => {

    return (
        <>
            <div className='flex justify-end gap-8 py-8 px-8 bg-gray-800 text-white font-semibold text-0.2xl uppercase'>
                <nav className='flex  gap-8 items-center'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/contacts'>Contacts</NavLink>
                    <NavLink to='/register'>Register</NavLink>
                    <NavLink to='/login'>Log In</NavLink>


                </nav >
            </div>
        </>
    )
}

export default AuthNav