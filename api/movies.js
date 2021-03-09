export async function getMovies() {
    const URL = 'https://swapi.dev/api/films'
    const options = {
        method : 'GET',
        headers : {
            Accept: '*/*',
            'Content-Type': 'application/json',
        }
    }

    const responseData = fetch(URL).then(response => response.json())
    return responseData
}

export async function getMovieData(id) {
    const URL = 'https://swapi.dev/api/films/' + id
    const responseData = fetch(URL).then(response => response.json())
    return responseData
}

export function getAllMoviesID() {
    const moviesIDs = [1, 2, 3, 4, 5, 6]

    return moviesIDs.map(movieID => {
        return {
            params: {
                id: movieID + ""
            }
        }
    })
}