import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {

  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password1: '',
          password2: '' 
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={ Yup.object({
          firstName: Yup.string()
            .max(15, 'El nombre debe contener 15 cáracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
          .max(15, 'El apellido debe contener 15 cáracteres o menos')
          .required('Requerido'),
          email: Yup.string()
            .email('Debe ser un email válido')
            .required('Requerido'),
          password1: Yup.string()
            .min(6, 'La contraseña debe tener un mínimo de 6 cáracteres')
            .required('Requerido'),
          password2: Yup.string()
          .min(6, 'La contraseña debe tener un mínimo de 6 cáracteres')
          .oneOf([ Yup.ref('password1') ], 'Las contraseñas no son iguales')
          .required('Requerido')
          
        })}
        >
          {
            ( { handleReset }) => (
              <Form>
            <MyTextInput 
            label={'First Name'} 
            name={'firstName'}
            placeholder='Ingresa tu nombre'
            />

            <MyTextInput 
            label={'Last Name'} 
            name={'lastName'}
            placeholder='Ingresa tu apellido'
            />

            <MyTextInput 
            label={'Email'} 
            name={'email'}
            type='email'
            placeholder='Ingresa tu email'
            />

            <MyTextInput 
            label={'Password'} 
            name={'password1'}
            type='password'
            placeholder='Ingresa tu contraseña'
            />

            <MyTextInput 
            label={'Repeat Password'} 
            name={'password2'}
            type='password'
            placeholder='Repite tu contraseña'
            />
            
            <button type='submit'>Submit</button>
            <button type='button' onClick={ handleReset }>Reset</button>

          </Form>
            )
          }
        </Formik>
    </div>
  )
}