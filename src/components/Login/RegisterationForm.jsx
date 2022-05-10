import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';
import FormikControls from './../FormikControls';

function RegisterationForm() {

    const options = [
        { key: 'Email', value: 'emailmoc' },
        { key: 'Telephone', value: 'telephonemoc' },
    ]
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        modeOfContact: '',
        phone: ''
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().required('Required').min(6, "Password is too short - should be 6 chars minimum"),
        confirmPassword: yup.string().oneOf([yup.ref('password'), ''], 'Passwords must match').required('Required'),
        modeOfContact: yup.string().required('Required'),
        phone: yup.string().when('modeOfContact', {
            is: 'telephonemoc',
            then: yup.string().required('Required')
        })
    })
    const onSubmit = values => {
        console.log("Form Data", values)
    }
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                formik => {
                    return (
                        <Form>
                            <FormikControls control='input' type='text' name='email' label='Email' />
                            <FormikControls control='input' type='password' name='password' label='Password' />
                            <FormikControls control='input' type='password' name='confirmPassword' label='Confirm Password' />
                            <FormikControls control='radio' name='modeOfContact' label='Mode of contact' options={options} />
                            <FormikControls control='input' name='phone' label='Phone number' type="text" />
                            <button type='submit' disabled={!formik.isValid}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default RegisterationForm