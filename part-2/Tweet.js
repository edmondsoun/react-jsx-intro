"use strict";

function Tweet({username,name,date,message}) {

    const myStylesP = {
        backgroundColor: "blue",
        color: "white",
    }
    
    const myStylesDiv = {
        backgroundColor: "purple"
    }
    
    return(
        <div style={myStylesDiv}>
            <p style={myStylesP}>{username}</p>
            <p style={myStylesP}>{name}</p>
            <p style={myStylesP}>{date}</p>
            <p style={myStylesP}>{message}</p>
        </div>
    )

}