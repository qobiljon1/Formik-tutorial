import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import FormikControls from './FormikControls';

function FormikContainer() {

    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option1', value: 'option1' },
        { key: 'Option2', value: 'option2' },
        { key: 'Option3', value: 'option3' },
        { key: 'Option4', value: 'option4' },
    ]
    const radioOption = [
        { key: 'Option1', value: 'roption1' },
        { key: 'Option2', value: 'roption2' },
        { key: 'Option3', value: 'roption3' },
    ]
    const checkboxOption = [
        { key: 'Option1', value: 'coption1' },
        { key: 'Option2', value: 'coption2' },
        { key: 'Option3', value: 'coption3' },
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOption: '',
        checkboxOption: [],
        birthDate: null
    };
    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Required'),
        description: yup.string().required('Required'),
        selectOption: yup.string().required('Required'),
        radioOption: yup.string().required('Required'),
        checkboxOption: yup.array().required('Required'),
        birthDate: yup.date().required('Required').nullable()
    })

    // sumbit function
    const onSubmit = values => {
        console.log("Form Data", JSON.parse(JSON.stringify(values)))
        console.log(values.birthDate)
    }
    console.log("ddd")
    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <FormikControls control='input' type='email' label='Email' name='email' />
                    <FormikControls control='textarea' label='Description' name='description' />
                    <FormikControls control='select' label='Select a topic' name='selectOption' options={dropdownOptions} />
                    <FormikControls control='radio' label='Radio Topic' name='radioOption' options={radioOption} />
                    <FormikControls control='checkbox' label='Checkbox Topic' name='checkboxOption' options={checkboxOption} />
                    <FormikControls control='date' label='Pick a date' name='birthDate' />
                    <button type='submit'>Submit</button>
                </Form>
            </Formik>
        </div>
    )
}

export default FormikContainer