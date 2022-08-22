import React from "react";

const Header = (props) => {
    return(
    <h1 style ={headingStyle}>Hello from component, {props.name}</h1>
    );
}

const headingStyle ={
    color:'red', backgroundColor:'blue'
}
export default Header;