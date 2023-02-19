import Head from 'next/head';
import styles from '../styles/Home.module.css';
import ReverseAnswerContainer from "./reverseComps/ReverseAnswerContainer";
import GuessBox from "./reverseComps/GuessBox";
import CategoryContainer from "./reverseComps/CategoryContainer";
import React, { useState } from 'react';
import Confetti from "react-confetti";
// import useWindowSize from 'react-use/lib/useWindowSize'
import Header from './Header'
import {userAgentFromString} from "next/server";





let answer = ['Apple', '100', 'Kazakhstan', 'Sweet', 'Fruit', 'Snack']
let info = ['Banana', '502', 'Germany', '502']


let foodInfo = { // Name, Calroies, Country origin, Flavor, Category, Time of eating
    apple: ['Apple', '100', 'Kazakhstan', 'Sweet', 'Fruit', 'Snack'],
    banana: ['Banana', '100', 'New Guinea', 'Sweet', 'Fruit', 'Snack'],
    pancake: ['Pancake', '400', 'Greece', 'Sweet', 'Grain', 'Breakfast'],
    steak: ['Steak', '300', 'All', 'Savory', 'Meat', 'Dinner'],
    tomato: ['Tomato', '100', 'Mexico', 'Sweet', 'Veggie', 'Ingredient'],
}

export default function Reverse() {
    const [guesses, setGuesses] = useState([]);
    const [win, setWin] = useState(false)
    const [confetti, setConfetti] = useState(() => <div></div>)
    // const { width, height } = [500, 500]


    function handleWin() {
        setWin(true);
        setConfetti(() => {
            return (
                <Confetti width={window.innerWidth} height={window.innerHeight}/>
            )
        })

    }

    function handleEnter(name) { // Callback prop to GuessBox
        if(name in foodInfo && !win) {
            setGuesses([foodInfo[name]].concat(guesses));

            if(JSON.stringify(foodInfo[name]) === JSON.stringify(answer)) {
                console.log("win")
                handleWin()
            }
        }
    }

    return (



        <div className={styles.container} style={{justifyContent:"start", paddingTop: "10%"}}>
            {confetti}
            {/*// confetti for win */}
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
            <img src="/Drink and Fruits.png" style={{ width: '300px', height: '250px', position: 'absolute', left: '50px', top:'0px', opacity:'.85'}}/>
            <img src="/Coffee.png" style={{ width: '300px', height: '250px', position: 'absolute', right: '-30px', bottom:'0px', opacity:'.85'}}/>

            <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
                <h1 style={{fontFamily:"Bangers, cursive", color:"white", fontSize: '50px',textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',}}>Guess the Food!</h1>

                <GuessBox handleEnter={handleEnter}/>

            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems:"start"}}>
                <CategoryContainer/>
                {/*<ReverseAnswerContainer answer={answer} info={info}/>*/}
                {guesses.map((item, index) => {
                    console.log(item);
                    return(

                        <ReverseAnswerContainer answer={answer} info={item}/>
                        )
                    }
                    )}
            </div>

            <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          background-color: #FFA101;
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
            overflow:hidden;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
        </div>
    )
}
