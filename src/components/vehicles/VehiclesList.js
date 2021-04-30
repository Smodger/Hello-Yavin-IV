import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from "../List";

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

    return (
        <div className="container mt-3">
            <List list={vehicles} resource="vehicles"></List>
        </div>
    )
}

export default VehiclesList;