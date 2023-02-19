import React from "react";


export default function Header(props) {
    return(
        <div style={{height: '100px', borderBottom: 'solid white 3px', width: '100vw', textAlign:'center'}}>
            <h1 style={{fontFamily:"Bangers, cursive", color:"white", fontSize: '50px',textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 1px 3px 2px black',}}>Foodle</h1>
        </div>

    )
}