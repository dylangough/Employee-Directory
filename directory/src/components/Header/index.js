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
                Employees are the backbone of your company. Here's all the import information about them!
            </div>
        </div>
    );
}
export default Header;