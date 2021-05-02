import React, { useEffect, useState } from 'react';
import axios from "axios";

const VehiclesShow = (props) => {
    const [id] = useState(props.match.params.id);
    const [vehicle, setvehicle] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://swapi.dev/api/vehicles/${id}`);
            const data = await res.data;
            setvehicle(data)
        }
        fetchData();
    }, [])

    const showCost = () => {
        if(vehicle.cost_in_credits < 3500) {
            return <p style={{ fontSize : 20 }} className="text-center bold">A bargin at only {vehicle.cost_in_credits} credits</p>
        }

        if(vehicle.cost_in_credits >= 3500 && vehicle.cost_in_credits < 1000000) {
            return <p style={{ fontSize : 20 }} className="text-center bold">A good price at {vehicle.cost_in_credits} credits</p>
        }

        if(vehicle.cost_in_credits >= 1000000) {
            return <p style={{ fontSize : 20 }} className="text-center bold">This will hurt your wallet, but if you're looking to destory something big then it's worth it - { vehicle.cost_in_credits } credits</p>
        }

        if(vehicle.cost_in_credits === "unknown") {
            return <p style={{ fontSize : 20 }} className="text-center bold">We don't know the cost, make us an offer?</p>
        }
    }

    
    if(!vehicle) {
        return <p>loading...</p>
    }else {
        return (
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h4 className="font-large text-center">{ vehicle.name }</h4>
                    </div>
                </div>
                <div>
                    <div className="row">
                        <div className="col-12">
                            <div>
                                {vehicle.model && <small>{ vehicle.model }</small>}
                                {vehicle.manufacturer && <small>{ vehicle.manufacturer }</small>}
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="mt-3">
                    <li>Size : { vehicle.length }</li>
                    <li>Planetary Speed : { vehicle.max_atmosphering_speed }</li>
                    <li>Hyperspace Speed : { vehicle.MGLT }</li>
                    <li>Hyperspace Rating : { vehicle.hyperdrive_rating }</li>
                    <li>Crew required : { vehicle.crew }</li>
                    <li>Passengers : { vehicle.passengers }</li>
                </ul>
                {showCost()}
            </div>
        )
    }
}

export default VehiclesShow;