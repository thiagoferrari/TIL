import { useState } from "react";

/* trabalhando com props: (usando spread) */
const Input = ({
    id, label, value,
    onChange, type, onBlur,
    placeholder, error
}) => {
    return (
        <div>
            <label htmlFor={id}>
                {label}
            </label>
            <input
                type={type} name={id}
                id={id} onBlur={onBlur}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {error && <p>{error}</p>}
        </div>
    )
}

export default Input