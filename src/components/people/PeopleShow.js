import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

import Garage from "./Garage";
import StarPort from "./StarPort";
import Images from "./Images";
import PersonalInfo from './PersonalInfo';

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

    const getVehiclesGarage = () => {
        if(person.vehicles.length > 0){
            return (
                <div className="col-4">
                    <h6 className="my-3 semi-bold">{person && person.name}'s Vehicles</h6>
                    {
                        person.vehicles.map((vehicle, i) => {
                            let vehicleId = vehicle.slice(-3);
                            return (
                                <Link key={i} to={`/vehicles/${vehicleId}`} style={{ textDecoration : "none" }}>
                                    <Garage vehicle={vehicle}></Garage>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    };

    const getStarships = () => {
        if(person.starships.length > 0 ){
            return (
                <div className="col-4">
                    <h6 className="my-3 semi-bold">{person && person.name}'s Starships</h6>
                    {
                        person.starships.map((ship, i) => {
                            let starshipId = ship.slice(-3);
                            return (
                                <Link key={i} to={`/starships/${starshipId}`} style={{ textDecoration : "none" }}>
                                    <StarPort ship={ship}></StarPort>
                                </Link>
                            )
                        })
                    }
                </div>
            )
        }
    };

    if(!person) {
        return <p>loading ...</p>
    }else {
        return (
            <div className="container mt-3">
                <div className="row mb-5">
                    <div className="col-12">
                        <h4 className="text-center font-large semi-bold">Star Wars Tinder</h4>
                        <h6 className="text-center">Looking For Love in Alderaan Places</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h4 style={{ fontSize : 28 }}>{person && person.name}</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <h6 className="my-3 semi-bold">{person && person.name}'s Information</h6>
                        {person && <PersonalInfo person={person}></PersonalInfo>}
                    </div>
                    {person && getVehiclesGarage()}
                    {person && getStarships()}
                </div>
                <div className="row">
                    <Images name={person && person.name}></Images>
                </div>
            </div>
        )
    }
}

export default PeopleShow;
