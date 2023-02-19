import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import Link from 'next/link'

import { styled } from '@mui/material/styles';

const StartButton = styled(Link)( {
    color:'black',
    backgroundColor: 'white',
    borderRadius: '25px',
    width: '200px',
    height: '50px',
    border: 'solid black 2px',
    // textAlign: 'center',
    // marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily:"Bangers, cursive",
    textDecoration: 'none',
    fontSize: '20px',
    marginBottom: '10px',
    '&:hover': {
        backgroundColor: '#fae6b1',
    },

})


class Home extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name); 
    
    //randomly select a food from the state
    // console.log(randomFood);
  }




  render() {
    return (
      <div className={styles.container}>
          <img src='/Background.png' style={{position: 'relative', width: '120vw', height: '120vh', top:'-10px'}}/>

          <Head>
          <title>Foodle</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <main style={{position: 'absolute', backgroundColor:'transparent'}}>

            <h1 style={{fontFamily:"Bangers, cursive", color:"white", fontSize: '80px',textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',}}>Foodle</h1>
          <StartButton href="/forward">Standard</StartButton>
          {/*  <Button sx={{color:'white'}} variant={"contained"}>Standard</Button>*/}
          {/*  <StartButton href="/forward">Standard</StartButton>*/}
            <StartButton href="/reverse">Reverse</StartButton>
          {/*  <Button variant={"contained"}>Reverse</Button>*/}
          {/*<Link href="/reverse">Reverse</Link>*/}
        </main>

        <style jsx>{`
          main {
            padding: 5rem 0;
            flex: 1;
            background-color: #FFA101;
            width:100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            
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
}

export default Home;