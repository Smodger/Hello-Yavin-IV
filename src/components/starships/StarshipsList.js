import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StarshipsList = () => {
    const [starships, setStarships] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getStartships();
            const data = await res.data.results
            setStarships(data)
        }
        fetchData();        
    }, [])

    const listStarships = () => {
        return starships.map((starship, i) => {
            return <p key={i}>{starship.name}</p>
        })
    }

    const getStartships = () => {
        return axios.get('https://swapi.dev/api/starships/');
    }

    return (
        <div>
            list of all starships
            {listStarships()}
        </div>
    )
}

export default StarshipsList;
