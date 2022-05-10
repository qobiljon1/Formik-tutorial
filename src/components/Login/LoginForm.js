import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';
import FormikControls from './../FormikControls';

function LoginForm() {
    const initialValues = {
        email: "",
        password: ""
    }
    const onSubmit = values => {
        console.log("Form date", values)
    }
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().required('Required')
    })
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return <Form>
                        <FormikControls control="input" type='email' label="Email" name="email" />
                        <FormikControls control="input" type='password' label="Password" name="password" />
                        <button type='sumbit' disabled={!formik.isValid}>Submit</button>
                    </Form>
                }
            }
        </Formik>
    )
}

export default LoginForm