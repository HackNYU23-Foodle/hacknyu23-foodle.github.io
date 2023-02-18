import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import FormControl from '@mui/material/FormControl';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { calories: 0, fat: 0, carbs: 0, sugar: 0, protein: 0 };
    this.state.name = this.props.foods[0].name;
    this.state.image_url = this.props.foods[0].image_url;
  }

  //name, image_url, 
  handleChange(event) {
    if (event.target.id == "calories") {
      this.setState({ calories: event.target.value });
    } else if (event.target.id == "fat") {
      this.setState({ fat: event.target.value });
    } else if (event.target.id == "carbs") {
      this.setState({ carbs: event.target.value });
    } else if (event.target.id == "sugar") {
      this.setState({ sugar: event.target.value });
    } else if (event.target.id == "protein") {
      this.setState({ protein: event.target.value });
    }
  }

  handleSubmit(event) { 
    event.preventDefault();
    this.setState({ calories: event.target.value, fat: event.target.value, carbs: event.target.value, sugar: event.target.value, protein: event.target.value });
  }

  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Foodle</h1>
          <h2> Guess the Info! </h2>
          <h2> {this.state.name} </h2>
          <Image src="/apple.jpg" alt="Foodle" width={500} height={500} />
          <form className="foodle_form" onSubmit={this.handleSubmit}>   
            <TextField id="calories" label="Calories" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0}/>
            <TextField id="fat" label="Fat" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0}/>
            <TextField id="carbs" label="Carbohydrates" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0}/>
            <TextField id="sugar" label="Sugar" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0}/>
            <TextField id="protein" label="Protein" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0}/>
            <button type="submit">Submit</button>
          </form>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by Aneesh Maganti, Thaison Le, Calvin Tian, Michael Duong, and Anish Kulkarni  
            Sponsered by Chipotle
          </a>
        </footer>

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
}

export async function getServerSideProps(context) {
  const foods = [
    {
      "name": "Apple",
      "image_url": "https://usapple.org/wp-content/uploads/2019/10/apple-pink-lady.png",
      "calories": 95,
      "fat": 0.3,
      "carbs": 25, 
      "sugar": 19,
      "protein": 0.5
    },
  ]

  return {
    props: {
      foods
    }
  }
}

export default Home;