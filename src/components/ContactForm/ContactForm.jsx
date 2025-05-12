import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';



const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required")
});


const ContactForm = () => {


    const nameFieldId = useId();
    const numberFieldId = useId();

    const initialValues = {
        id: "",
        name: "",
        number: ""
    };
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        actions.resetForm();
        const newContact = {
            ...values,
        };
        dispatch(addContact(newContact))
    };

    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={ContactFormSchema}>
                <div className="card w-70 bg-base-100 card-xs shadow-md justify-self-center my-4">
                    <div className="card-body">
                        <Form  >
                            <label className='input input-accent flex my-4 justify-self-center' htmlFor={nameFieldId} >Name
                                <Field type="text" name="name" id={nameFieldId} />
                                <ErrorMessage name="name" component="span" />
                            </label>


                            <label className='input input-accent flex my-4 justify-self-center' htmlFor={numberFieldId} >Number
                                <Field type="text" name="number" id={numberFieldId} />
                                <ErrorMessage name="number" component="span" />
                            </label>

                            <button type="submit" className="btn btn-accent flex my-4 justify-self-center">Add Contact</button>
                        </Form>
                    </div>
                </div>
            </Formik>
        </>
    )
}

export default ContactForm