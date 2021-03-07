import {getMovies} from '../api/movies'
import {useEffect, useState} from 'react'

export default function ListMovies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function getListMovies() {
            const films = await getMovies();
            console.log(films)
            setMovies(films.result);
        }

        getListMovies()
    }, [movies])


    return (
        <div>
            { movies && movies.map((id, index) => {
                return (
                    <div key={id}>
                        {id.title}
                    </div>
                )
            })}
        </div>
    )

}