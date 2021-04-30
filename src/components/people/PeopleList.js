import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
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
            return (
                <Link key={i} to={`/people/${i + 1}`}>
                    <div className="list-item">
                        <p>{person.name}</p>
                    </div>
                </Link>
            )
        });
    }

    return (
        <div className="text-center">
            {listPeople()}
        </div>
    )
}

export default PeopleList;
