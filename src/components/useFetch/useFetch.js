import { useEffect, useState } from "react";
import axios from "axios"

const useFetch = (url) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const {data: responseData} = await axios.get(url)
            setData(responseData)
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {data, error, loading}
}

export default useFetch;

