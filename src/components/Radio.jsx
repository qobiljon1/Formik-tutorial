import React from 'react'
import { Field, ErrorMessage } from 'formik';
import TextError from './TextError';

function Radio(props) {
    const { name, label, options, ...rest } = props
    return (
        <div className='form-control'>
            <label>{label}</label>
            <Field name={name} {...rest}>
                {
                    ({ field }) => {
                        return options.map(option => {
                            return (
                                <React.Fragment key={option.key} >
                                    <input style={{ display: "inline-block" }} type="radio" id={option.value} {...field} value={option.value} checked={field.value === option.value} />
                                    <label style={{ display: "inline-block", marginLeft: "10px" }} htmlFor={option.value}>{option.key}</label>
                                </React.Fragment>
                            )
                        })
                    }
                }
            </Field>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Radio