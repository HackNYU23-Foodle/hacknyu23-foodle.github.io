
import Head from 'next/head';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import {Text, StyleSheet} from 'react-native';

let boxSize = 100;       // Individual box size
let containerSize = 800; // Container width
let spacing = "34px";    // Spacing for individual boxes

let categories=['Name', 'Category2','asdadsd  ', 'Category4', 'Category5','Category6']

let boxes = categories.map((item,index)=> {
    return (
        <Grid container sx={{paddingLeft: "0px", paddingRight: spacing}} xs={'auto'}>
            <Box m={0} p={0} sx={{
                backgroundColor: 'transparent',
                height: boxSize,
                width: boxSize,
                textAlign: "center",
                display: "flex",
                borderBottom: "solid white 5px",
                justifyContent: "center",
                alignItems: "end",
                fontFamily: 'Bangers, cursive',
                color: 'white',
                textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',
                fontSize: 28,
                // textShadow: '1px 1px 2px pink',
                // fontFamily: 'Big Shoulders Text, cursive';
            }}>
                <p>{item}</p>
            </Box>
        </Grid>
    )
})


export default function CategoryContainer() {
    return(
        <Box sx={{
            // backgroundColor:'blue',
            height:boxSize,
            width:containerSize,
            marginBottom: "25px",
        }}>
            <Grid m={0} p={0} container
                  // justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}>
                {boxes}
            </Grid>
        </Box>
    )
}