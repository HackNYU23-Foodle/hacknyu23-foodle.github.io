
import Head from 'next/head';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import TextField from "@mui/material/TextField";
import { alpha, styled } from '@mui/material/styles';



const ValidationTextField = styled(TextField)({
    '& input:valid + fieldset': {
        borderColor: 'white',
        borderRadius: 25,
        borderWidth: 3,
        // height:'100px',
        // width:'100px',
        // textAlign: "center",
    },
});

export default function ForwardInput(props) {
    return(
            <ValidationTextField sx={{ ml: 1, flex: 1, color: 'white', width: "100px", fontSize: '25px', justifyContent:'center'}}
                id={props.id} label={props.label} type="number" InputLabelProps={{ shrink: true }} width="4px" onChange={props.handle} defaultValue={0} required/>
    )

}