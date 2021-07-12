import { useState } from "react";

/* trabalhando com props: (usando spread) */
const Input = ({ id, label, value, setValue, ...props }) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                {...props}
                type="text" id={id}
                name={id} value={value}
                onChange={({ target }) => setValue(target.value)}
            />
        </div>
    )
}

export default Input