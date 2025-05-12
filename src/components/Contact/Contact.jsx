import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';



const Contact = ({ name, number, id }) => {


    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    };

    return (
        <>
            <div className="card w-70 lg:w-96 bg-base-100 card-xs shadow-md">
                <div className="card-body">
                    <h2 className="card-title flex lg:text-2xl"> <IoPerson className='fill-accent' />{name}</h2>
                    <p className='text-[16px]' >{number}</p>

                    <div className="justify-end card-actions">
                        <button className="btn btn-outline btn-accent" >Edit</button>
                        <button className="btn btn-accent" onClick={() => { handleDelete(id) }}>Delete</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact