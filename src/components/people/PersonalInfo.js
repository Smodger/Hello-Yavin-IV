import React, { useState, useEffect } from 'react';
import axios from "axios";

const PersonalInfo = (props) => {
    const [planet, setPlanet] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(props.person.homeworld);
            const data = await res.data;
            setPlanet(data)
        }
        fetchData();
    }, [])

    return (
        <ul>
            <li>Height: {props.person.height}</li>
            <li>Weight: {props.person.mass} <small>(It doesn't matter in space!)</small></li>
            <li>DOB: {props.person.birth_year}</li>
            <li>Hometown: {planet && planet.name}</li>
        </ul>
    )
}

export default PersonalInfo;
