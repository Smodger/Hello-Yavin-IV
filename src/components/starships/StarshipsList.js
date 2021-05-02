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

    const listCards = () => {
        if(starships.length > 0){
            return starships.map((ship, i) => {
                return (
                    <div className="card mx-auto mb-1" key={i} style={{ width: 288 }}>
                        <div className="card-body">
                            <h5 className="card-title">{ship.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ship.model}</h6>
                            <ul>
                                <li className="card-text">Speed - {ship.max_atmosphering_speed}</li>
                                <li className="card-text">Hyperspeed - {ship.MGLT}</li>
                                <li className="card-text">Cost - {ship.cost_in_credits} credits</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    }


    if(starships.length <= 0) {
        return <p>loading...</p>
    }else {
        return (
            <>
                <div className="container mt-3 d-none d-md-block">
                    <Chart array={starships} resource="starships"></Chart>
                </div>
                <div className="container mt-3 d-block d-md-none">
                    {listCards()}
                </div>
            </>
        )
    }
}

export default StarshipsList;
