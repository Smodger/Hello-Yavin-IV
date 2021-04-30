import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

	const listFilms = () => {
		return films.map((film, i) => {
            console.log('film', film);
			return (
                <Link>
                    <div key={i} className="list-item">
                        <p>{film.title}</p>
                    </div>
                </Link>
                
            )
		});
	};

	return (
		<div className="text-center">
            {listFilms()}
		</div>
	);
};

export default FilmList;
