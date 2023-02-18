
import Head from 'next/head';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import {Text, StyleSheet} from 'react-native';

let categories=['Category1', 'Category2','Cpoaksd', 'Category4', 'Category5','Category6']

let boxes = categories.map((item,index)=> {
    return (
        <Grid container sx={{paddingLeft: "0px", paddingRight: "25px"}} xs={'auto'}>
            <Box m={0} p={0} sx={{
                backgroundColor: 'white',
                height: 100,
                width: 100,
                textAlign: "center",
                outlineStyle: "solid",
                outlineColor: "black",
                borderRadius: "5px",
            }}>
                <p>{item}</p>
            </Box>
        </Grid>
    )
})


export default function CategoryContainer() {
    return(
        <Box sx={{
            backgroundColor:'blue',
            height:100,
            width:800,
        }}>
            <Grid m={0} p={0} container
                  // justifyContent={"center"}
                  alignItems={"center"}
                  spacing={2}>
                {boxes}


                {/*<Grid item xs={3}>*/}
                {/*    <Box sx={{ backgroundColor: 'green', height: 50, width: 50}}>*/}

                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Box sx={{ backgroundColor: 'green', height: 50, width: 50}}>*/}

                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Box sx={{ backgroundColor: 'green', height: 50, width: 50}}>*/}

                {/*    </Box>*/}
                {/*</Grid>*/}
                {/*<Grid item xs={3}>*/}
                {/*    <Box sx={{ backgroundColor: 'green', height: 50, width: 50}}>*/}

                {/*    </Box>*/}
                {/*</Grid>*/}
            </Grid>
        </Box>
    )
}