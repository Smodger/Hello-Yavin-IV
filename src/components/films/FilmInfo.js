import React from 'react'

const FilmInfo = (props) => {
    return (
        <div style={{ marginTop : 3 + 'em'}}>
            <p className="film-data">Directed by : {props.director}</p>
            <p className="film-data">Produced by : {props.producer}</p>
            <p className="film-data">Releast date : {props.release}</p>
        </div>
    )
}

export default FilmInfo;