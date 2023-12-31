import React, { useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";


interface FetchResponse<T> {
    count: number;
    results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
    const [data, setData] = React.useState<T[]>([])
    const [error, setError] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false)

    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)

        console.log('useData', endpoint, requestConfig);
        

        apiClient
            .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
            .then(res => {setData(res.data.results)
                setIsLoading(false)
            })
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
                setIsLoading(false)
            })

            return () => controller.abort()

    }, deps ? [...deps] : []);

    return { data, error, isLoading }
};

export default useData;