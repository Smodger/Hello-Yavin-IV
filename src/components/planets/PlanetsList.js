import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    const listPlanets = () => {
        return planets.map((planet, i) => {
            return <p key={i}>{planet.name}</p>
        })
    }

    return (
        <div>
            All the planets
            {listPlanets()}
        </div>
    )
}

export default PlanetsList;