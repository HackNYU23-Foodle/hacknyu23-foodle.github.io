import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import FormControl from '@mui/material/FormControl';

class Forward extends React.Component {
  constructor(props) {
    super(props);
    var random_food = this.props.food_data[Math.floor(Math.random() * this.props.food_data.length)];
    console.log(random_food);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 'name': random_food.product_name, 'image_url': random_food.image_url, 'calories': 0, 'fat': 0, 'carbs': 0, 'sugar': 0, 'protein': 0,
    'actual_calories': random_food.energy_100g, 'actual_fat': random_food.fat_100g, 'actual_carbs': random_food.carbohydrates_100g, 'actual_sugar': random_food.sugars_100g, 'actual_protein': random_food.protein_100g };
  }

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
    // this.setState({ calories: event.target.value, fat: event.target.value, carbs: event.target.value, sugar: event.target.value, protein: event.target.value });

    //write code to check if answers are correct within a 10% margin of error
    let calories = this.state.calories;
    let fat = this.state.fat;
    let carbs = this.state.carbs;
    let sugar = this.state.sugar;
    let protein = this.state.protein;

    let actual_calories = this.state.actual_calories;
    let actual_fat = this.state.actual_fat;
    let actual_carbs = this.state.actual_carbs;
    let actual_sugar = this.state.actual_sugar;
    let actual_protein = this.state.actual_protein;

    let calories_correct = false
    let fat_correct = false
    let carbs_correct = false
    let sugar_correct = false
    let protein_correct = false

    if (calories >= actual_calories * 0.8 && calories <= actual_calories * 1.1) {
      calories_correct = true
    }
    if (fat >= actual_fat * 0.9 && fat <= actual_fat * 1.1) {
      fat_correct = true
    }
    if (carbs >= actual_carbs * 0.9 && carbs <= actual_carbs * 1.1) {
      carbs_correct = true
    }
    if (sugar >= actual_sugar * 0.9 && sugar <= actual_sugar * 1.1) {
      sugar_correct = true
    }
    if (protein >= actual_protein * 0.9 && protein <= actual_protein * 1.1) {
      protein_correct = true
    }

    if (calories_correct && fat_correct && carbs_correct && sugar_correct && protein_correct) {
      alert("You Got It!");
    } else {
      alert("Not quite there yet...");
    }
  }

  render() {
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
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1>Foodle</h1>
          <h2> Guess the Info! </h2>
          <h2> {this.state.name} </h2>
          <img src={this.state.image_url} alt="Foodle" width={500} height={500} />
          <form className="foodle_form" onSubmit={this.handleSubmit}>   
            <TextField id="calories" label="Calories" type="number" InputLabelProps={{ shrink: true }} width="4px" onChange={this.handleChange} defaultValue={0} required/>
            <TextField id="fat" label="Fat" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required/>
            <TextField id="carbs" label="Carbohydrates" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required />
            <TextField id="sugar" label="Sugar" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required />
            <TextField id="protein" label="Protein" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required />
            <button type="submit">Submit</button>
          </form>
        </main>

        <footer>
          Powered by Aneesh Maganti, Thaison Le, Calvin Tian, Michael Duong, Anish Kulkarni, and Deytabase Airlines
        </footer>

        <style jsx>{`
          h1 {
            textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',
            fontSize: 28,
          }
          main {
            padding: 5rem 0;
            font: 'Bangers, cursive',
            color: 'white',
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #FFA101;
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
var food_data = require('../deytabase.json');
  return {
    props: {
      food_data
    }
  }
}

export default Forward;