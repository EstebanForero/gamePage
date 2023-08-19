import React, { useEffect } from 'react'
import apiClient from '../services/api-client'
import { Text } from '@chakra-ui/react';

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
const GameGrid = () => {
    const [games, setGames] = React.useState<Game[]>([])
    const [error, setError] = React.useState('')

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
            .then(res => setGames(res.data.results))
            .catch(err => setError(err.message))
    })

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid