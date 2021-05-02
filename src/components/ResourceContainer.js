import React, { useContext } from 'react'
import { Link } from "react-router-dom";

import logo from "../images/logo.png";
import ThemeContext from "./context/theme-context";

import Style from "../style.json"

const ResourceContainer = () => {

    const ctx = useContext(ThemeContext);

    return (
        <div>
            <ul className="nav" style={ ctx.darkSide ? { backgroundColor : Style.darkSide.color} : { backgroundColor : Style.lightSide.color }}>
                <li className="nav-item">
                    <Link to="/">
                        <img src={logo} alt="Star Wars Logo" className="nav-logo"></img>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/films" className="nav-link">Films</Link>
                </li>
                <li className="nav-item">
                    <Link to="/people" className="nav-link">People</Link>
                </li>
                <li className="nav-item">
                    <Link to="/starships" className="nav-link">Starships</Link>
                </li>
                <li className="nav-item">
                    <Link to="/vehicles" className="nav-link">Vehicles</Link>
                </li>
                <li className="nav-item mx-auto mx-md-0 theme-toggle">
                    <label className="switch" onChange={ctx.toggleTheme}>
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                    <span 
                        className="ms-3 semi-bold"
                        style={{ color : "#F7BD2F" }}
                    >
                    { ctx.darkSide ? "Switch to the light side" : "Give in to your hate"}
                    </span>
                </li>
            
            </ul>
        </div>
    )
}
export default ResourceContainer;