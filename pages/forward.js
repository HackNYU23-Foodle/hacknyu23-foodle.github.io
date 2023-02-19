import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import React from 'react';
import FormControl from '@mui/material/FormControl';
import ForwardInput from "./forwardComps/ForwardInput";
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import Header from './Header'

class Forward extends React.Component {
  constructor(props) {
    super(props);
    var random_food = this.props.food_data[Math.floor(Math.random() * this.props.food_data.length)];
    console.log(random_food);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { 'name': random_food.product_name, 'image_url': random_food.image_url, 'calories': 0, 'fat': 0, 'carbs': 0, 'sugar': 0, 'protein': 0,
    'actual_calories': random_food.energy_100g, 'actual_fat': random_food.fat_100g, 'actual_carbs': random_food.carbohydrates_100g, 'actual_sugar': random_food.sugars_100g, 'actual_protein': random_food.proteins_100g,
    'calories_correct': false, 'fat_correct': false, 'carbs_correct': false, 'sugar_correct': false, 'protein_correct': false,
    'calories_text': "", 'fat_text': "", 'carb_text': "", 'sugar_text': "", 'protein_text': ""
  };
  }

  handleChange(event) {
    if (event.target.id == "calories") {
      console.log("Hello");
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

    if (calories >= actual_calories * 0.7 && calories <= actual_calories * 1.3) {
      calories_correct = true

      this.setState({
        calories_correct: true,
        calories_text: "Calories is correct!"
      })
    }
    else {
      this.setState({
        calories_text: "Calories is incorrect!"
      })

      if (calories > actual_calories) {
        this.setState({
          calories_text: this.state.calories_text + " You are too high."
        })
      } else {
        this.setState({
          calories_text: this.state.calories_text + " You are too low."
        })
      }
    }

    if (fat >= actual_fat * 0.7 && fat <= actual_fat * 1.3) {
      fat_correct = true
      this.setState({
        fat_correct: true,
        fat_text: "Fat is correct!"
        })
    }
    else {
      this.setState({
        fat_text: "Fat is incorrect!"
      })

      if (fat > actual_fat) {
        this.setState(prevState => ({
          fat_text: prevState.fat_text + " You are too high."
        }));
      } else {
        this.setState(prevState => ({
          fat_text: prevState.fat_text + " You are too low."
        }));
      }
    }

    if (carbs >= actual_carbs * 0.7 && carbs <= actual_carbs * 1.3) {
      carbs_correct = true
      this.setState({
        carbs_correct: true,
        carb_text: "Carbohydates is correct!"
      })
    }
    else {
      this.setState({
        carb_text: "Carbohydates is incorrect!"
      })

      if (carbs > actual_carbs) {
        this.setState(prevState => ({
          carb_text: prevState.carb_text + " You are too high."
        }));
      } else {
        this.setState(prevState => ({
          carb_text: prevState.carb_text + " You are too low."
        }));
      }
    }

    if (sugar >= actual_sugar * 0.7 && sugar <= actual_sugar * 1.3) {
      sugar_correct = true
      this.setState({
        sugar_correct: true,
        sugar_text: "Sugar is correct!"
      })
    }
    else {
      this.setState({
        sugar_text: "Sugar is incorrect!"
      });

      if (sugar > actual_sugar) {
        this.setState(prevState => ({
          sugar_text: prevState.sugar_text + " You are too high."
        }));
      } else {
        this.setState(prevState => ({
          sugar_text: prevState.sugar_text + " You are too low."
        }));
      }
    }

    if (protein >= actual_protein * 0.7 && protein <= actual_protein * 1.3) {
      protein_correct = true
      this.setState({
        protein_correct: true,
        protein_text: "Protein is correct!" 
      });
    }
    else {
      this.setState({
        protein_text: "Protein is incorrect!"
      });
      if (protein > actual_protein) {
        this.setState(prevState => ({
          protein_text: prevState.protein_text + " You are too high."
        }));
      } else {
        this.setState(prevState => ({
          protein_text: prevState.protein_text + " You are too low."
        }));
      }
    }

    if (calories_correct && fat_correct && carbs_correct && sugar_correct && protein_correct) {
      alert("You Got It!");
    } else {
      // alert("Not quite there yet...");
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

        <Header>

        </Header>

        <main style={{fontFamily:"Bangers, cursive", color:"white", fontSize: '30px', }}>

          <img src="/rice and applepng.png" style={{ width: '1500px', height: '1030px', position: 'absolute', left: '580px', top:'0px', opacity:'.85'}}/>
          <div style={{textAlign:"center"}}>

            <h4 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',}}> Guess the Info! </h4>
            <h4 style={{textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',}}> {this.state.name} </h4>
          </div>
          <img src={this.state.image_url} alt="Foodle" width={300} height={300} />
          <div style={{width: '50px', height: '50px'}}/>
          <form className="foodle_form" onSubmit={this.handleSubmit} style={{textShadow:'0 0 0 0 #0000'}}>
            {/*<TextField id="calories" label="Calories" type="number" InputLabelProps={{ shrink: true }} width="4px" onChange={this.handleChange} defaultValue={0} required/>*/}
            <ForwardInput id={"calories"} label={"Calories"} handle={this.handleChange}/>
            {/*<TextField id="fat" label="Fat" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required/>*/}
            <ForwardInput id={"fat"} label={"Fat"} handle={this.handleChange}/>
            {/*<TextField id="carbs" label="Carbohydrates" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required />*/}
            <ForwardInput id={"carbs"} label={"Carbohydrates"} handle={this.handleChange}/>
            {/*<TextField id="sugar" label="Sugar" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required />*/}
            <ForwardInput id={"sugar"} label={"Sugar"} handle={this.handleChange}/>
            {/*<TextField id="protein" label="Protein" type="number" InputLabelProps={{ shrink: true, }} width="10px" onChange={this.handleChange} defaultValue={0} required />*/}
            <ForwardInput id={"protein"} label={"Protein"} handle={this.handleChange}/>
            <IconButton type={"submit"} color="primary" sx={{ p: '10px' }} aria-label="east">
              <EastIcon  sx={{color: 'white'}}/>
            </IconButton>
          </form>

          <div>
            {/* <h3>textShadow</h3> */}
            <h3>{this.state.calories_text}</h3>
            <h3>{this.state.fat_text}</h3>
            <h3>{this.state.carb_text}</h3>
            <h3>{this.state.sugar_text}</h3>
            <h3>{this.state.protein_text}</h3>
            {/* {this.state.calories >= this.state.actual_calories * 0.7 && this.state.calories <= this.state.actual_calories * 1.3 ? <h4>Calories is Correct</h4> : this.state.actual_calories < this.state.calories ? <h4>Calories is too high</h4> : <h4>Calories is too low</h4>}
            {this.state.fat_correct ? <h4>Fat is Correct</h4> : this.state.actual_fat < this.state.fat ? <h4>Fat is too high</h4> : <h4>Fat is too low</h4>}
            {this.state.carbs_correct ? <h4>Carbs is Correct</h4> : this.state.actual_carbs < this.state.carbs ? <h4>Carbs is too high</h4> : <h4>Carbs is too low</h4>}
            {this.state.sugar_correct ? <h4>Sugar is Correct</h4> : this.state.actual_sugar < this.state.sugar ? <h4>Sugar is too high</h4> : <h4>Sugar is too low</h4>}
            {this.state.protein_correct ? <h4>Protein is Correct</h4> : this.state.actual_protein < this.state.protein ? <h4>Protein is too high</h4> : <h4>Protein is too low</h4>}             */}
            
          </div>

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
            padding: 0;
            font: 'Bangers, cursive',
            color: 'white',
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: #FFA101;
            max-width:100vw;
            
            
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
              max-width:100vw;
              overflow:hidden;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    )
 } 
}

export async function getStaticProps (context) {
var food_data = require('../deytabase.json');
  return {
    props: {
      food_data
    }
  }
}

export default Forward;
