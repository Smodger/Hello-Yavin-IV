import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Chart from "../UI/Chart";

const VehiclesList = () => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           const res = await getVehicles();
           const data = await res.data.results
           setVehicles(data)
        }
        fetchData();
    }, [])

    const getVehicles = () => {
        return axios.get('https://swapi.dev/api/vehicles/')
        // error handling?
    }

    const listCards = () => {
        if(vehicles.length > 0){
            return vehicles.map((vehicle, i) => {
                return (
                    <div className="card mx-auto mb-1" key={i} style={{ width: 288 }}>
                        <div className="card-body">
                            <h5 className="card-title">{vehicle.name}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">{vehicle.model}</h6>
                            <ul>
                                <li className="card-text">Speed - {vehicle.max_atmosphering_speed}</li>
                                <li className="card-text">Hyperspeed - {vehicle.MGLT}</li>
                                <li className="card-text">Cost - {vehicle.cost_in_credits} credits</li>
                            </ul>
                        </div>
                    </div>
                )
            })
        }
    }

    if(vehicles.length <= 0) {
        return <p>loading...</p>
    }else {
        return (
            <>
                <div className="container mt-3 d-none d-md-block">
                    <Chart array={vehicles} resource="vehicles"></Chart>
                </div>
                <div className="container mt-3 d-block d-md-none">
                    {listCards()}
                </div>
            </>
        )
    }
}

export default VehiclesList;