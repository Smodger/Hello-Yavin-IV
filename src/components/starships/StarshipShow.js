import React, { useEffect, useState } from 'react';
import axios from "axios";

const StarshipShow = (props) => {
    const [id] = useState(props.match.params.id);
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://swapi.dev/api/starships/${id}`);
            const data = await res.data;
            setStarship(data)
        }
        fetchData();
    }, [])

    const showCost = () => {
        if(starship.cost_in_credits < 3500) {
            return <p style={{ fontSize : 20 }} className="text-center bold">A bargin at only {starship.cost_in_credits} credits</p>
        }

        if(starship.cost_in_credits >= 3500 && starship.cost_in_credits < 1000000) {
            return <p style={{ fontSize : 20 }} className="text-center bold">A good price at {starship.cost_in_credits} credits</p>
        }

        if(starship.cost_in_credits >= 1000000) {
            return <p style={{ fontSize : 20 }} className="text-center bold">This will hurt your wallet, but if you're looking to destory something big then it's worth it - { starship.cost_in_credits } credits</p>
        }

        if(starship.cost_in_credits === "unknown") {
            return <p style={{ fontSize : 20 }} className="text-center bold">We don't know the cost, make us an offer?</p>
        }
    }

    
    if(!starship) {
        return <p>loading...</p>
    }else {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h4 className="font-large text-center">{ starship.name }</h4>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                {starship.model && <small>{ starship.model }</small>}
                                {starship.manufacturer && <small>{ starship.manufacturer }</small>}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="mt-3">
                    <li>Size : { starship.length }</li>
                    <li>Planetary Speed : { starship.max_atmosphering_speed }</li>
                    <li>Hyperspace Speed : { starship.MGLT }</li>
                    <li>Hyperspace Rating : { starship.hyperdrive_rating }</li>
                    <li>Crew required : { starship.crew }</li>
                    <li>Passengers : { starship.passengers }</li>
                </ul>
                {showCost()}
            </div>
        )
    }
}

export default StarshipShow;