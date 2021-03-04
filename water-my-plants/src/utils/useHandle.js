import { useState } from "react";

export const useHandle = initialValue => {
    const [value, setValue] = useState(initialValue);
    
    const handleChange = input => {
        console.log("useHandle: ", input)
        setValue({
            ...value,
            [input.name] : input.value,
        });
    };
    return [value, setValue, handleChange];
}