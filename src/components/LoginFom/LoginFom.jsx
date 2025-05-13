

import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';




function LoginForm() {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email").required("Email required"),
        password: Yup.string().min(6, "Min 6 symbols").required("Password required"),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values) => {
        dispatch(loginThunk(values));
    };


    return (


        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                            <Form>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <Field type="email" name="email" className="input" placeholder="Email" />
                                    <ErrorMessage className='text-red-700' name="email" component="span" />
                                    <label className="label">Password</label>
                                    <Field name="password" type="password" className="input" placeholder="Password" />
                                    <ErrorMessage className='text-red-700' name="password" component="span" />
                                    {/* <div><a className="link link-hover">Forgot password?</a></div> */}
                                    <button className="btn btn-accent mt-4 mb-6" type='submit'>Login</button>

                                    <Link to='/register' className='link link-hover text-[16px]'>You don't have an account? Sign up!</Link>

                                    <Link to='/' className='link link-hover text-[16px]'>Back to Homepage</Link>

                                </fieldset>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;