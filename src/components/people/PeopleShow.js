import React, { useEffect, useState } from 'react';
import axios from "axios";

const PeopleShow = (props) => {
    const [id] = useState(props.match.params.id);
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPerson();
            const data = await res.data;
            setPerson(data)
        }
        fetchData();
    }, [])

    const getPerson = () => {
        return axios.get(`https://swapi.dev/api/people/${id}`)
    }
    console.log('p', person);
    return (
        <div>
            {person && person.name}
        </div>
    )
}

export default PeopleShow;
