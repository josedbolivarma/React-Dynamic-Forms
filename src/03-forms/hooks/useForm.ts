import { ChangeEvent, useState } from "react";


export const useForm = <T>( initialState: T) => {

    const [ registerData, setRegisterData ] = useState(initialState)
        
      const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData( prev => ({
            ...prev,
            [event.target.name]: event.target.value
        }))
      }

      const resetForm = () => {
        setRegisterData(initialState)
      }
    
      const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        registerData,
        onChange,
        resetForm,
        isValidEmail
    }
}