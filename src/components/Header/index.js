import React from "react";
import "./style.css";

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Clicky Game</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <ul className="navbar-nav mx-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">{props.message}</a>
                    {console.log(props)}
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Score: {props.score}| Top Score:{props.topScore}</a>
                    {console.log(props)}
                </li>
            </ul>

        </nav>
    )
}

export default Header;