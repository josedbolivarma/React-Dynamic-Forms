import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

    // const { handleSubmit, errors 
    //     , touched, getFieldProps } = useFormik({
    //     initialValues: {
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //     },
    //     onSubmit: values => {
    //         console.log(values);
    //     },
    //     validationSchema: Yup.object({
    //         firstName: Yup.string()
    //         .max(15, 'Debe de tener 15 cáracteres o menos')
    //         .required('Requerido'),
    //         lastName: Yup.string()
    //         .max(15, 'Debe de tener 15 cáracteres o menos')
    //         .required('Requerido'),
    //         email: Yup.string()
    //         .email('Debes ingresar un email válido')
    //         .required('Requerido')
    //     })
    // });

  return (
    <div>
        <h1>Formki Basic Tutorial</h1>

        <Formik
        initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
        }}
        onSubmit={ (values) => {
            console.log(values);
        }}
        validationSchema={ Yup.object({
            firstName: Yup.string()
            .max(15, 'Debe de tener 15 cáracteres o menos')
            .required('Requerido'),
            lastName: Yup.string()
            .max(15, 'Debe de tener 15 cáracteres o menos')
            .required('Requerido'),
            email: Yup.string()
            .email('Debes ingresar un email válido')
            .required('Requerido'),
            terms: Yup.boolean()
                .oneOf([true], 'Debe de aceptar las condiciones'),
            jobType: Yup.string()
                .notOneOf(['it-jr'], 'Esta opción no es permitida')
                .required('Requerido')
        })}
        >

            { (formik) => (
                <Form noValidate>
                    <label htmlFor="firstName">First Name</label>
                    <Field name='firstName' type='text' />
                    <ErrorMessage component='span' name='firstName' />
                  
                   <label htmlFor="lastName">Last Name</label>
                    <Field name='lastName' type='text' />
                    <ErrorMessage component='span' name='lastName' />        
                    
                    <label htmlFor="email">Email Address</label>
                    <Field name='email' type='text' />
                    <ErrorMessage component='span' name='email' />        
                    {/* <input 
                    type="email"
                    { ...getFieldProps('email') }
                    />
                    { touched.email && errors.email && <span>{ errors.email }</span>} */}
                    <label htmlFor="jobType">Job Type</label>
                    <Field name='jobType' as='select' >
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr.</option>
                    </Field>
                    <ErrorMessage component='span' name='jobType' />        

                    <label>
                    <Field name='terms' type='checkbox' />
                    Terms and Conditions
                    </label>
                    <ErrorMessage component='span' name='terms' />        

                    <button type='submit'>Submit</button>
        
                </Form>
                )
            }

        </Formik>

       
    </div>
  )
}