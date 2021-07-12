import { useState } from "react";

/* trabalhando com props: (usando spread) */
const Input = ({ id, label, value, onChange, ...props }) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                {...props}
                type="text" id={id}
                name={id} value={value}
                onChange={onChange}
            />
        </div>
    )
}

export default Input