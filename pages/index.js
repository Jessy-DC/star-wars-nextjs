import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {getMovies} from "../api/movies";

export default function Home({data}) {
  const movies = data.results;

  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars Universe</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Star Wars Universe, a next.js application !
        </h1>

        <div className={styles.grid}>
            { movies && movies.map((movie, index) => (
                <a key={movie.episode_id} href="https://nextjs.org/learn" className={styles.card}>
                    <h3>{movie.title} &rarr;</h3>
                    <p className={styles.description}>{movie.opening_crawl.substr(0,300)}...</p>
                </a>
            ))}
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps(context) {
    const data = await getMovies()
    return {
        props: {data}
    }
}
