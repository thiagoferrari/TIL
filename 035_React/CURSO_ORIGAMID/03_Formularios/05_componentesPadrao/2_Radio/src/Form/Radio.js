import { useState } from "react";

const Radio = ({ options, value, setValue, ...props }) => {
    return (
        <>
            {options.map(o => (
                <label key={o}>
                    <input type="radio" value={o}
                        checked={value === o}
                        onChange={({ target }) => setValue(target.value)}
                        {...props}
                    />
                    {o}
                </label>
            ))}
        </>
    )
}

export default Radio