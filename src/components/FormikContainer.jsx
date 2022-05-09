import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FormikControls from './FormikControls';

function FormikContainer() {
    const initialValues = {
        email: '',
        description: '',

    };
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        description: yup.string().required('Required')
    })
    const onSubmit = values => {
        console.log("Form data", values)
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => (
                        <Form>
                            <FormikControls control='input' type='email' label='Email' name='email' />
                            <FormikControls control='textarea' label='Description' name='description' />
                            <button type='submit'> Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default FormikContainer