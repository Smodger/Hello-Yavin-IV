import React, { useEffect, useState } from 'react';
import axios from 'axios';

import List from "../UI/List";

const SpeciesList = () => {
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getSpecies();
            const data = await res.data.results;
            setSpecies(data)
        }
        fetchData();
    }, [])

    const getSpecies = () => {
        return axios.get('https://swapi.dev/api/species/');
    }

    return (
        <div className="container mt-3">
            <List list={species} resource="species"></List>
        </div>
    )
}

export default SpeciesList;