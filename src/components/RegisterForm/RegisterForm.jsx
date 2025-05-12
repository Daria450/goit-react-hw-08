import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';


const validationSchema = Yup.object({
    name: Yup.string().required("Name required"),
    email: Yup.string().email("Invalid email").required("Email required"),
    password: Yup.string().min(6, "Min 6 symbols").required("Password required"),
});

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const handleSubmit = (values) => {
    console.log(values);
};



function RegisterForm() {
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>

            <Form>
                <Field
                    name="name"
                    type='name'
                    label="Name"
                />
                <ErrorMessage name="name" component="span" />

                <Field
                    name="email"
                    type='email'
                    label="Email"
                />
                <ErrorMessage name="email" component="span" />

                <Field
                    name="password"
                    type="password"
                    label="Password"
                />
                <ErrorMessage name="password" component="span" />
                <Link to='/login'>You already have account? Sign in!</Link>
                <button type="submit" variant="contained">Sign up</button>

                <Link to='/'>Back to Homepage</Link>

            </Form>


        </Formik>



    );
}

export default RegisterForm;