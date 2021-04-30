import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

    const listSpecies = () => {
        return species.map((alien,i) => {
            return <p key={i}>{alien.name}</p>
        })
    }

    return (
        <div>
            list of all species
            {listSpecies()}
        </div>
    )
}

export default SpeciesList;