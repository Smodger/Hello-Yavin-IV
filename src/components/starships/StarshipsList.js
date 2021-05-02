import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Chart from "../UI/Chart";

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


    if(starships.length <= 0) {
        return <p>loading...</p>
    }else {
        return (
            <div className="container mt-3">
                <Chart array={starships} resource="starships"></Chart>
            </div>
        )
    }
}

export default StarshipsList;
