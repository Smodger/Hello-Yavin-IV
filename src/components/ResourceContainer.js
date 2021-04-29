import React from 'react'
import { Link } from "react-router-dom";

const ResourceContainer = () => {
  return (
    <div>
      <ul>
        <li><Link to="/films">Films</Link></li>
        <li><Link to="/planets">Planets</Link></li>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/species">Species</Link></li>
        <li><Link to="/starships">Starships</Link></li>
        <li><Link to="/vehicles">Vehicles</Link></li>
      </ul>
    </div>
  )
}
export default ResourceContainer;