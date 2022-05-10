import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup';
import FormikControls from './../FormikControls';



function Enrollment() {

    const dropdownOptions = [
        { key: 'Select your course', value: '' },
        { key: 'React', value: 'react' },
        { key: 'Angular', value: 'angular' },
        { key: 'Vue', value: 'vue' },
    ]
    const checkboxOptions = [
        { key: 'HTML', value: 'html' },
        { key: 'CSS', value: 'css' },
        { key: 'JavaScript', value: 'javascript' },
    ]

    const initialValues = {
        email: '',
        bio: '',
        course: '',
        skills: [],
        courseDate: null,

    }
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        bio: yup.string().required('Required'),
        course: yup.string().required('Required'),
        skills: yup.array().required('Required'),
        courseDate: yup.date().required('Required').nullable()
    })
    const onSubmit = values => {
        console.log("Form data", JSON.parse(JSON.stringify(values)))
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {
                    formik => {
                        return (
                            <Form>
                                <FormikControls control='input' label='Email' name='email' type='email' />
                                <FormikControls control='textarea' label='Bio' name='bio' />
                                <FormikControls control='select' label='Course' name='course' options={dropdownOptions} />
                                <FormikControls control='checkbox' label='Your skillset' name='skills' options={checkboxOptions} />
                                <FormikControls control='date' label='Course date' name='courseDate' />

                                <button type='submit'>Submit</button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default Enrollment