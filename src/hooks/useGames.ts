import { useEffect } from "react";
import apiClient from "../services/api-client";
import React from "react";
import { CanceledError } from "axios";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    next: string;
    previous: string;
    results: Game[];
}

const useGames = () => {
    const [games, setGames] = React.useState<Game[]>([])
    const [error, setError] = React.useState('')

    useEffect(() => {
        const controller = new AbortController()

        apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
            .then(res => setGames(res.data.results))
            .catch(err => {
                if (err instanceof CanceledError) return
                setError(err.message)
            })

            return () => controller.abort()
    }, [])

    return { games, error }
}

export default useGames
