
import Head from 'next/head';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import {Text, StyleSheet} from 'react-native';

let boxSize = 100;       // Individual box size
let containerSize = 800; // Container width
let spacing = "34px";    // Spacing for individual boxes

let categories=['Category1', 'Category2','asdadsd   asdadpok', 'Category4', 'Category5','Category6']
//
// let boxes = categories.map((item,index)=> {
//     return (
//         <Grid container sx={{paddingLeft: "0px", paddingRight: spacing}} xs={'auto'}>
//             <Box m={0} p={0} sx={{
//                 backgroundColor: 'green',
//                 height: boxSize,
//                 width: boxSize,
//                 textAlign: "center",
//                 outlineStyle: "solid",
//                 outlineColor: "black",
//                 borderRadius: "5px",
//             }}>
//                 <p>{item}</p>
//             </Box>
//         </Grid>
//     )
// })

function generateBoxes(info, answer) {
    return( info.map((item,index)=> {
        return (
            <Grid container sx={{paddingLeft: "0px", paddingRight: spacing}} xs={'auto'}>
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