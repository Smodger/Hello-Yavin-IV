import React, { useEffect, useState } from 'react';
import axios from "axios";

const PeopleList = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await getPeople();
            const data = await res.data.results;
            setPeople(data);
        }
        fetchData();
    }, [])

    const getPeople = () => {
        return axios.get('https://swapi.dev/api/people/')
    }

    const listPeople = () => {
        return people.map((person, i) => {
            return <p key={i}>{person.name}</p>
        });
    }

    return (
        <div>
            list of people
            {listPeople()}
        </div>
    )
}

export default PeopleList;
