import styles from './FormsControls.module.css'
import { Field } from "redux-form";
import React from "react";

const FormControl = ({ input, meta: { touched, error }, children }) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {children}
            </div>
            {hasError && < span className={styles.error}>{error}</span>}
        </div>
    )
}


export const Textarea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><textarea  {...input} {...restProps} />
    </FormControl>
}


export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} />
    </FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = '') => (
    <div>
        {text}
        <Field placeholder={placeholder}
               name={name}
               validate={validators}
               component={component}
               {...props} />

    </div>)