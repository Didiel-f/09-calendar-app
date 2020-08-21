import { useState } from "react";

export const useForm = (initialState = {} ) => {
    const [values, setValues] = useState(initialState);

    const reset = () => {
        setValues(initialState);
    }

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [ target.name ]: target.value
            
        });
    }

    const handleImageChange = ({target}) => {
        setValues({
            ...values,
            url: target.src
            
        });
    }

    return [ values, handleInputChange, reset, handleImageChange ];

}


