import { useState, useEffect } from "react";

const useLocalStorage = (key, inicial) => {
    const [state, setState] = useState(() => {

        const cache = window.localStorage.getItem(key);
        /* se houver algum cache em localStorage com esta key, retornar ele: */
        return cache ? cache : inicial
    })

    /* abaixo: sempre que state ou key mudarem,
        será armazenado o seu valor: */
    useEffect(() => {
        window.localStorage.setItem(key, state)
    }, [key, state])

    return [state, setState]
}

export default useLocalStorage