
import Head from 'next/head';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import EastIcon from '@mui/icons-material/East';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {useState} from "react";
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

// const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
//     <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//     ['& .${tooltipClasses.tooltip}']: {
//         backgroundColor: '#f5f5f9',
//         color: 'rgba(0, 0, 0, 0.87)',
//         maxWidth: 220,
//         fontSize: theme.typography.pxToRem(12),
//         border: '1px solid #dadde9',
//     },
// }));


export default function GuessBox(props) {
    const [isHovering, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);
    return(
        <Paper
            // component="form"asdads
            sx={{ p: '2px 4px', display: 'flex',
                alignItems: 'center', width: 400,
                borderRadius:'25px', backgroundColor:'transparent',
                outlineStyle:'solid', outlineColor:'white',
                justifyContent:'center'

            }}
        >

            <Tooltip title={"IN BETA- Available choices are: apple, banana, pancake, steak, tomato"}>
                <IconButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} color="primary" sx={{ p: '10px' }} aria-label="east">
                    <HelpOutlineIcon sx={{color: 'white'}}/>
                </IconButton>
            </Tooltip>

            <InputBase
                sx={{ ml: 1, flex: 1, fontFamily:'Big Shoulders Text, cursive', color:'white', fontSize: '25px', justifyContent:'center' }}
                placeholder="Input Food"
                // inputProps={{ 'aria-label': 'search google maps' }}
                // onKeyPress={(event) => {return event.key !== 'Enter';}}
                onKeyDown={(event) => {
                    if (event.keyCode === 13) {
                        props.handleEnter(event.target.value.toLowerCase())
                        event.target.value = '';
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



