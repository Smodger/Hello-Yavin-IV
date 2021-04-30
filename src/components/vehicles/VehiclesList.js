import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    const listVehicles = () => {
        return vehicles.map((vehicle, i) => {
            return <p key={i}>{vehicle.name}</p>
        })
    }

    return (
        <div>
            list of all vehicles:
            {listVehicles()}
        </div>
    )
}

export default VehiclesList;