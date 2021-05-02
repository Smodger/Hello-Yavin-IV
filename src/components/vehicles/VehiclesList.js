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

    if(vehicles.length <= 0) {
        return <p>loading...</p>
    }else {
        return (
            <div className="container mt-3">
                <Chart array={vehicles} resource="vehicles"></Chart>
            </div>
        )
    }
}

export default VehiclesList;