export async function getCharacter(endpoint) {
    const responseData = fetch(endpoint).then(response => response.json())
    return responseData
}