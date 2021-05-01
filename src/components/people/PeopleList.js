import React, { useEffect, useState } from 'react';
import axios from "axios";

import List from "../UI/List";

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

    return (
        <div className="container mt-3">
            <List list={people} resource="people"></List>
        </div>
    )
}

export default PeopleList;
