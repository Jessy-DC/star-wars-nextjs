import styles from '../../styles/Characters.module.css'
import {getCharacter} from "../../api/characters";
import {getAllMoviesID, getMovieData} from "../../api/movies";
import {Footer} from "../../components/Footer";
import {Header} from "../../components/Head"
import Link from 'next/link'

export default function GetCharacters({characters, movieData}) {
    return (
        <div className={styles.container}>
            <Header />

            <main className={styles.main}>
                <h1 className={styles.title}>
                    You are on {movieData.title}'s page !
                </h1>

                <div className={styles.grid}>
                    { characters && characters.map((character, index) => (
                        <a key={character.url} href="https://nextjs.org/learn" className={styles.card}>
                            <h3>{character.name} &rarr;</h3>
                            <p className={styles.description}>Date of birth {character.birth_year}</p>
                        </a>
                    ))}
                </div>
                <Link href="/">
                    <a>Back to home</a>
                </Link>
            </main>

        <Footer />
        </div>
    )
}

export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths = getAllMoviesID()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    let moviesID = [4, 5, 6, 1, 2, 3]
    let movieId = moviesID[params.id - 1]

    const movieData = await getMovieData(movieId)
    const charactersEndpoint = movieData.characters
    let characters = []

    for (let i = 0; i < charactersEndpoint.length; i++) {
        let character = await getCharacter(charactersEndpoint[i])
        characters.push(character)

        if(i === 10) {
            break;
        }
    }

    return {
        props: {
            characters,
            movieData
        }
    }
}