import React from "react";
import Button from "./Button";


const Header = (props) => {

    const onClick = (e) =>{
        console.log(e)
    }
    return(
    <header className="header">
        <h1>Hello from component, {props.name}</h1>
        <Button onClick={onClick} text="Click" color="royalBlue"/>
    </header>
    );
}

Header.defaultProps = {
    title: "Task Tracker",
}


export default Header;