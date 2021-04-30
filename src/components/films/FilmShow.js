import React, { useEffect, useState } from 'react'
import axios from "axios";

import Intro from "./Intro"

const FilmShow = (props) => {
    const [id] = useState(props.match.params.id);
    const [film, setFilm] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            const res = await getFilm();
            const data = await res.data;
            setFilm(data)
        }
        fetchData();
    }, [])

    const getFilm = () => {
        return axios.get(`https://swapi.dev/api/films/${id}`)
    }

    return (
        <div>
            {film && <Intro film={film}></Intro>}
        </div>
    )
}

export default FilmShow;
