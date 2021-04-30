import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import FilmInfo from "./FilmInfo";

const Intro = (props) => {
    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
           window.removeEventListener("scroll", handleScroll);
        };
    }, [])
    return (
        <div className="parralax-container">
            <div className="parralax-bg" style={{ transform : `translateY(${offsetY * 2}px)` }}></div>
            <div className="parralax-fg text-center" style={{ transform : `translateY(${offsetY * 0.2}px)` }}>
                <h4 className="font-large bold">{props.film.title}</h4>
                <p>{props.film.opening_crawl}</p>
                <FilmInfo 
                    director={props.film.director}
                    producer={props.film.producer}
                    release={props.film.release_date}
                ></FilmInfo>

                <div style={{ marginTop : 50 }}>
                    <Link to="/" style={{ color : 'yellow' }}>Back</Link>
                </div>
            </div>
        </div>
    )
}

export default Intro;
