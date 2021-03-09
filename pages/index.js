
import styles from '../styles/Home.module.css'
import {getMovies} from "../api/movies";
import Link from 'next/link'
import {Footer} from "../components/Footer";
import {Header} from "../components/Head"

export default function Home({data}) {
  const movies = data.results;

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Star Wars Universe, a next.js application !
        </h1>

        <div className={styles.grid}>
            { movies && movies.map((movie, index) => (
                <Link href={`/movies/${movie.episode_id}`} key={movie.episode_id}>
                    <a  className={styles.card}>
                        <h3>{movie.title} &rarr;</h3>
                        <p className={styles.description}>{movie.opening_crawl.substr(0,300)}...</p>
                    </a>
                </Link>
            ))}
        </div>

      </main>
        <Footer />

    </div>
  )
}

export async function getStaticProps(context) {
    const data = await getMovies()
    return {
        props: {data}
    }
}
