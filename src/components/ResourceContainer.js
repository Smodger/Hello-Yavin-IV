import React from 'react'
import { Link } from "react-router-dom";

import logo from "../images/logo.png"

const ResourceContainer = () => {
  return (
    <div>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/">
                    <img src={logo} alt="Star Wars Logo" className="nav-logo"></img>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/films" className="nav-link">Films</Link>
            </li>
            <li className="nav-item">
                <Link to="/planets" className="nav-link">Planets</Link>
            </li>
            <li className="nav-item">
                <Link to="/people" className="nav-link">People</Link>
            </li>
            <li className="nav-item">
                <Link to="/species" className="nav-link">Species</Link>
            </li>
            <li className="nav-item">
                <Link to="/starships" className="nav-link">Starships</Link>
            </li>
            <li className="nav-item">
                <Link to="/vehicles" className="nav-link">Vehicles</Link>
            </li>
        </ul>
    </div>
  )
}
export default ResourceContainer;