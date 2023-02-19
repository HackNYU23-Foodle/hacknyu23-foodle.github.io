
import Head from 'next/head';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';






export default function GuessBox(props) {
    return(
        <Paper
            // component="form"
            sx={{ p: '2px 4px', display: 'flex',
                alignItems: 'center', width: 400,
                borderRadius:'25px', backgroundColor:'transparent',
                outlineStyle:'solid', outlineColor:'white',
                justifyContent:'center'

            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, fontFamily:'Big Shoulders Text, cursive', color:'white', fontSize: '25px', justifyContent:'center' }}
                placeholder="Input Food"
                // inputProps={{ 'aria-label': 'search google maps' }}
                // onKeyPress={(event) => {return event.key !== 'Enter';}}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        props.handleEnter()
                    }

                }}

            />
            <Divider sx={{ height: 28, m: 0.5, backgroundColor:'white' }} orientation="vertical" />
            <IconButton color="primary" sx={{ p: '10px' }} aria-label="east">
                <EastIcon sx={{color: 'white'}}/>
            </IconButton>
        </Paper>
    )

}



