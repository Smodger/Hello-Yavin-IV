import React, { useState, useEffect } from 'react';
import axios from "axios";

const Garage = (props) => {
    const [vehicle, setVehicle] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(props.vehicle);
            const data = await res.data;
            setVehicle(data)
        }
        fetchData();
    }, [])

    return <p className="m-0">{vehicle && vehicle.name}</p>
}

export default Garage;
