import React, { useEffect, useState } from 'react';
import axios from "axios";

import List from "../List";

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

    // const listPeople = () => {
    //     return people.map((person, i) => {
    //         return (
    //             <Link key={i} to={`/people/${i + 1}`}>
    //                 <div className="list-item">
    //                     <p>{person.name}</p>
    //                 </div>
    //             </Link>
    //         )
    //     });
    // }

    return (
        <div className="container mt-3">
            <List list={people} resource="people"></List>
        </div>
    )
}

export default PeopleList;
