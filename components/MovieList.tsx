import { FC, useEffect, useState } from 'react'
import { Movie } from '@/models/Movie'
import Card from './Card'


const MOVIE_REVIEW_PROGRAM_ID = 'CenYq6bDRB7p73EjsPEpiYN7uveyPUTdXkDkgUduboaN'

export const MovieList: FC = () => {
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        setMovies(Movie.mocks)
    }, [])
    
    return (
        <div>
            {
                movies.map((movie, i) => {
                    return (
                        <Card key={i} movie={movie} />
                    )
                })
            }
        </div>
    )
}