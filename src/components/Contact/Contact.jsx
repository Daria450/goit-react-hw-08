
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, editContact } from '../../redux/contacts/operations';
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { isEditContact } from "../../redux/contacts/slice";
import { useId } from "react";
import { selectIsEdit } from "../../redux/contacts/selectors";



const Contact = ({ name, number, id }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const ContactFormSchema = Yup.object().shape({
        name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        number: Yup.string().matches(/^[0-9+\-() ]+$/, "Only digits and symbols + - ( ) are allowed").min(2, "Too Short!").max(50, "Too Long!").required("Required")
    });
    const initialValues = {
        id: id,
        name: name,
        number: number,
    };

    const isEdit = useSelector(selectIsEdit);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteContact(id))
    };
    const handleEdit = (values) => {
        dispatch(editContact(values))
        dispatch(isEditContact(null))
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleEdit}
                validationSchema={ContactFormSchema}
            >
                {({ values }) => (
                    <div className="card w-70 lg:w-96 bg-base-100 card-xs shadow-md">
                        <Form className="card-body">
                            {isEdit === id && (
                                <>
                                    <fieldset className="fieldset">
                                        <label className="input input-accent flex my-4" htmlFor={nameFieldId}>
                                            Name
                                            <Field type="text" name="name" id={nameFieldId} />
                                        </label>
                                        <ErrorMessage className="text-red-700" name="name" component="span" />
                                        <label className="input input-accent flex my-4" htmlFor={numberFieldId}>
                                            Number
                                            <Field type="text" name="number" id={numberFieldId} />
                                        </label>
                                        <ErrorMessage className="text-red-700" name="number" component="span" />
                                    </fieldset>
                                    <div className="justify-end card-actions">
                                        <button type="submit" className="btn btn-accent">Save Changes</button>
                                        <button type="button" onClick={() => dispatch(isEditContact(null))} className="btn btn-accent">Cancel</button>
                                    </div>
                                </>
                            )}

                            {isEdit !== id && (
                                <div className="card-body bg-white">
                                    <h2 className="card-title flex lg:text-2xl">
                                        <IoPerson className="fill-accent" />
                                        {values.name}
                                    </h2>
                                    <p className="text-[16px]">{values.number}</p>
                                    <div className="justify-end card-actions">
                                        <button type="button" className="btn btn-outline btn-accent" onClick={() => dispatch(isEditContact(id))}>Edit</button>
                                        <button type="button" className="btn btn-accent" onClick={() => handleDelete(id)}>Delete</button>
                                    </div>
                                </div>
                            )}
                        </Form>
                    </div>
                )}
            </Formik>

        </>
    )
}

export default Contact