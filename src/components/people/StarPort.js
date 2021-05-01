import React, { useState, useEffect } from 'react';
import axios from "axios";

const StarPort = (props) => {
    const [ship, setShip] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(props.ship);
            const data = await res.data;
            setShip(data)
        }
        fetchData();
    }, [])

    return <p className="m-0">{ship && ship.name}</p>
}

export default StarPort;