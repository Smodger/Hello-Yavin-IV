import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from "../UI/List";

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

    const getStartships = () => {
        return axios.get('https://swapi.dev/api/starships/');
    }

    return (
        <div className="container mt-3">
            <List list={starships} resource="starships"></List>
        </div>
    )
}

export default StarshipsList;
