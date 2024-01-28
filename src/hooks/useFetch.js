import { useEffect, useState } from "react"

export const useFetch = (params) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);

    const fetchMovie = (url) => {
        setIsLoading(true);
        fetch(url)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.Response === 'True') {
                    setData(responseJson.Search || responseJson);
                    setError(false);
                } else {
                    setError(true);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        fetchMovie(`${import.meta.env.VITE_API_URI}${params}`)
    }, [params])

    return {isLoading, error, data}
}