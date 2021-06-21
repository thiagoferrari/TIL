import { useCallback, useState } from "react";

const useFetch = () => {

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    const request = useCallback(
        async function request(url, options) {
            let response, json

            try {
                setError(null)
                setLoading(true)
                response = await fetch(url, options)
                json = await response.json()

            } catch (error) {
                json = null
                setError('error')

            } finally {
                setData(json)
                // com erro ou não o loading não será exibido ao fim do fetch
                setLoading(false)

                return { response, json }
            }
        }, [])

    return { data, error, loading, request }
}
export default useFetch