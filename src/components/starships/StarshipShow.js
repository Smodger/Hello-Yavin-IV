import React, { useEffect, useState } from 'react';
import axios from "axios";

const StarshipShow = (props) => {
    const [id] = useState(props.match.params.id);
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://swapi.dev/api/starships/${id}`);
            const data = await res.data;
            setStarship(data)
        }
        fetchData();
    }, [])

    return (
        <div>
            { starship && starship.name}
        </div>
    )
}

export default StarshipShow;