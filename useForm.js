import { useState } from 'react';

export const useForm = ( initialForm = {} ) => {

    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } ) => {
            //Estamos desetructurando event y de ahi traemos el target
          
            const { name, value } = target;

            setFormState({
                ...formState,
                [ name ]: value 
            });

    }
 //[] propiedades computadas, establece el nuevo valor
    const onResetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
    }

}
