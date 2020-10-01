import React from "react";
import "./style.css";

function Header() {
    return (
        <div className="wrapper">
            <div className="title">
                Employee Directory
            </div>
            <br></br>
            <div className="tagline">
                Here is detailed information about all of our employees!
            </div>
        </div>
    );
}
export default Header;