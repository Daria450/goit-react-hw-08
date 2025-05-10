import React from 'react'
import Contact from '../Contact/Contact'
import s from './ContactList.module.css'
import { useSelector } from 'react-redux';
import { selectError, selectLoading, selectVisibleContacts } from '../../redux/contactsSlice';


const ContactList = () => {

    const error = useSelector(selectError);
    const loading = useSelector(selectLoading)


    const visibleContacts = useSelector(selectVisibleContacts);



    return (
        <>
            <ul>{visibleContacts.map(item =>
                <li key={item.id} className={s.li}><Contact name={item.name} number={item.number} id={item.id} /></li>)}
            </ul>
            {error && <h2>Server is dead...</h2>}
            {loading && <h2>Loading...</h2>}
        </>
    )
}

export default ContactList