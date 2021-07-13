import { useState } from "react";

const Select = ({ options, value, setValue, ...props }) => {
    return (
        <select
            value={value}
            onChange={({ target }) => setValue(target.value)}
            {...props}
        >
            <option value="" disabled>
                Selecione
            </option>

            {options.map(o => (
                <option value={o} key={o}>
                    {o}
                </option>
            ))}
        </select>
    )
}

export default Select