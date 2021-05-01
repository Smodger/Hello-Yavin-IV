import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from "../UI/List";

const PlanetsList = () => {
    const [planets, setPlanets] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const res = await getPlanets();
            const data = res.data.results;
            setPlanets(data);
        }
        fetchData();
    }, [])

    const getPlanets = () => {
        return axios.get('https://swapi.dev/api/planets/');
    }

    return (
        <div className="container mt-3">
            <List list={planets} resource="planets"></List>
        </div>
    )
}

export default PlanetsList;