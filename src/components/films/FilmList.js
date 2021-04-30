import React, { useEffect, useState } from "react";
import axios from "axios";

import List from "../List";

const FilmList = () => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const res = await getFilms();
			const data = await res.data.results;
			setFilms(data);
		};
		fetchData();
	}, []);

	const getFilms = () => {
		return axios.get("https://swapi.dev/api/films/");
	};

	return (
        <div className="container mt-3">
            <List list={films} resource="films"></List>
        </div>
	);
};

export default FilmList;
