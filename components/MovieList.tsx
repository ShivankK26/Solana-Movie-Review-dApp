import { FC, useEffect, useState } from 'react'
import { Movie } from '@/models/Movie'
import { Card } from './Card'


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


// Deserializing code
// export const MovieList: FC = () => {
//     const connection = new web3.Connection(web3.clusterApiUrl('devnet'))
//     const [movies, setMovies] = useState<Movie[]>([])

//     useEffect(() => {
//         connection.getProgramAccounts(new web3.PublicKey(MOVIE_REVIEW_PROGRAM_ID)).then(async (accounts) => {
//             const movies: Movie[] = accounts.reduce((accum: Movie[], { pubkey, account }) => {
//                 const movie = Movie.deserialize(account.data)
//                 if (!movie) {
//                     return accum
//                 }

//                 return [...accum, movie]
//             }, [])
//             setMovies(movies)
//         })
//     }, [])
    
//     return (
//         <div>
//             {
//                 movies.map((movie, i) => <Card key={i} movie={movie} /> )
//             }
//         </div>
//     )
// }