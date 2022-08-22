import React from "react";
import Button from "./Button";

const Header = (props) => {
    return(
    <header className="header">
        <h1>Hello from component, {props.name}</h1>
        <Button/>
    </header>
    )
}


export default Header;