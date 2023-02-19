
import Head from 'next/head';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import {Text, StyleSheet} from 'react-native';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

let boxSize = 100;       // Individual box size
let containerSize = 800; // Container width
let spacing = "34px";    // Spacing for individual boxes



function generateBoxes(info, answer) {
    if (!info) {
        return "Loading...";
    }
    return( info.map((item,index)=> {
        return (
            <Grid key={index} container sx={{paddingLeft: "0px", paddingRight: spacing}} xs={'auto'}>
                <Box m={0} p={0} sx={{
                    backgroundColor: answer[index] === item ? 'rgba(0, 255, 0, 0.4)' : 'rgba(255, 0, 0, 0.4)', // Check content
                    height: boxSize,
                    width: boxSize,
                    textAlign: "center",
                    outlineStyle: "solid",
                    outlineColor: "black",
                    borderRadius: "5px",
                }}>
                    <p>{item}</p>
                </Box>
            </Grid>
        )
    }))

}


export default function ReverseAnswerContainer(props) {
    return(
        <Box sx={{
            // backgroundColor:'blue',
            height:boxSize,
            width:containerSize,
        }}>
            <Grid m={0} p={0} container
                // justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}>
                {generateBoxes(props.info, props.answer)}
            </Grid>

        </Box>
    )
}
