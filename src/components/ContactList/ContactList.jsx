import React from 'react'
import Contact from '../Contact/Contact'

import { useSelector } from 'react-redux';
import { selectError, selectLoading, selectVisibleContacts } from '../../redux/contactsSlice';


const ContactList = () => {

    const error = useSelector(selectError);
    const loading = useSelector(selectLoading)


    const visibleContacts = useSelector(selectVisibleContacts);



    return (
        <>
            <ul className='flex gap-4 flex-wrap justify-center my-16 text-gray-800'>{visibleContacts.map(item =>
                <li key={item.id} ><Contact name={item.name} number={item.number} id={item.id} /></li>)}
            </ul>
            {error && <h2 className='text-gray-800 font-bold flex justify-self-center' >Server is dead...</h2>}
            {loading && <span className="loading loading-dots text-accent loading-xl flex justify-self-center"></span>}
        </>
    )
}

export default ContactList