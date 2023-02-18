import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import Reverse from "./reverse";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{backgroundColor:'orange'}}>
        {/*<h1>Foodle</h1>*/}
        {/*<h2> Guess the Info! </h2>*/}
        {/*<Image src="/apple.jpg" alt="Foodle" width={500} height={500} />*/}
        {/*<form action='/results'>*/}
        {/*  <input type="text" name="guess" placeholder="Guess the Info!"/>*/}
        {/*  <input type="submit" value="Submit"/>*/}
        {/*</form>*/}
          <Reverse/>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Aneesh Maganti, Thaison Le, Calvin Tian, Michael Duong, and Anish Kulkarni  
        </a>
      </footer>

      <style jsx>{`
        main {
          //padding: 5rem 0;
          flex: 1;
          display: flex;
          width:100%;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
