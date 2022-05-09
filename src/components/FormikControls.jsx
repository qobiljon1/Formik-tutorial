import React from 'react'
import Input from './Input';
import Radio from './Radio';
import Select from './Select';
import Textarea from './Textarea';

function FormikControls(props) {
    const { control, ...rest } = props

    switch (control) {
        case 'input': return <Input {...rest} />
        case 'textarea': return <Textarea {...rest} />
        case 'select': return <Select {...rest}/>
        case 'radio': return <Radio {...rest}/>
        case 'checkbox':
        case 'date':
        default: return null
    }
}

export default FormikControls   