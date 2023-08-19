import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre {
    id: number;
    name: string;
}

interface FetchGenreResponse {
    count: number;
    results: Genre[];
}

const useGenres = () => {
    const [genres, setGenres] = React.useState<Genre[]>([])
    const [error, setError] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setIsLoading(true)
        apiClient.get<FetchGenreResponse>('/games', { signal: controller.signal })
            .then(res => {setGenres(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setIsLoading(false)
            })

            return () => controller.abort()
    }, [])

    return { genres, error, isLoading }
};

export default useGenres;