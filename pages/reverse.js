import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ReverseAnswerContainer from "./reverseComps/ReverseAnswerContainer";
import GuessBox from "./reverseComps/GuessBox";
import CategoryContainer from "./reverseComps/CategoryContainer";


function handleEnter() { // Callback prop to GuessBox
    console.log("Enter handled");
}

let answer = ['Apple', '101', 'France', '502']
let info = ['Banana', '502', 'Germany', '502']

export default function Reverse() {



    return (
        <div className={styles.container}>
            <Head>
                <title>Reverse Foodle</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Text:wght@100&display=swap" rel="stylesheet"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link
                href="https://fonts.googleapis.com/css2?family=Bangers&family=Big+Shoulders+Text:wght@100&display=swap"
                rel="stylesheet"/>
            </Head>

            <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <GuessBox handleEnter={handleEnter}/>

            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems:"end"}}>
                <CategoryContainer/>
                <ReverseAnswerContainer answer={answer} info={info}/>
            </div>



            <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
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
