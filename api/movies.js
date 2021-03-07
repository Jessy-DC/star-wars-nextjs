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