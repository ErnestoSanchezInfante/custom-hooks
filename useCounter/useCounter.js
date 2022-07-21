import { useState } from "react"

//Un hook es una funcion que tiene un return
export const useCounter = ( intialValue = 10) => {

    const [counter, setCounter] = useState(intialValue);

    const increment = ( value = 1 ) => {
        setCounter ( ( current ) => current + value );
    }

    const decrement = ( value = 1 ) => {
        if (counter === 0 ) return;

        setCounter ( ( current ) => current - value );
    }

    const reset = () => {
        setCounter ( intialValue );
    }


    return{
        counter,
        increment,
        decrement,
        reset,
    }

}