import React from "react";


const Button =({color,text,onClick}) =>{
    return <button style={{backgroundColor:color}} onClick={onClick} className="btn" >{text}</button>;
    
}

Button.defaultProps = {
    color: "steelBlue",
    text: "Fred"
}

export default Button;