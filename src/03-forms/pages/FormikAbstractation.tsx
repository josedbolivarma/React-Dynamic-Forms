import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { 
    MyTextInput, 
    MySelect, 
    MyCheckbox 
} from '../components/index';

import '../styles/styles.css';

export const FormikAbstractation = () => {

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
                    <MyTextInput 
                    label={'First Name'} 
                    name={'firstName'} 
                    placeholder='Elige tu nombre'
                    />
                   <MyTextInput 
                    label={'Last Name'} 
                    name={'lastName'} 
                    placeholder='Ingresa tu apellido'
                    />
                     <MyTextInput 
                    label={'Email'} 
                    name={'email'} 
                    placeholder='Ingresa tu Email'
                    type='email'
                    />
                  
                    <MySelect label='Job Type' name='jobType' as='select' >
                        <option value=''>Pick something</option>
                        <option value='developer'>Developer</option>
                        <option value='designer'>Designer</option>
                        <option value='it-senior'>IT Senior</option>
                        <option value='it-jr'>IT Jr.</option>
                    </MySelect>

                    <MyCheckbox label='Terms and Conditions' name='terms' />
                    <button type='submit'>Submit</button>
        
                </Form>
                )
            }

        </Formik>

       
    </div>
  )
}