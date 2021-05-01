import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import blaster from '../../images/blaster.png';
import darkSideIcon from '../../images/empire-icon.jpeg';
import lightSideIcon from '../../images/light-side-icon.jpeg';
import Style from "../../style.json";
import ThemeContext from "../context/theme-context";

const List = (props) => {
    const ctx = useContext(ThemeContext)

    const getImage = () => {

        if(ctx.darkSide) {
            return <img src={darkSideIcon} className="d-none d-md-inline" style={{ width : 20 }} alt="dark side icon"></img>
        }

        if(!ctx.darkSide){
            return <img src={lightSideIcon} className="d-none d-md-inline" style={{ width : 20 }} alt="light side icon"></img>
        }
    }

    const getBlasterBoltColor = () => {
        if(ctx.darkSide) {
            return {
                backgroundImage: `linear-gradient(to right, #fefefe, ${Style.darkSide.color})`
            }
        };

        if(!ctx.darkSide) {
            return {
                backgroundImage: `linear-gradient(to right, #fefefe, ${Style.lightSide.color})`
            }
        };
    }

    return props.list.map((item, i) => {
        return (
            <Link key={i} to={`/${props.resource}/${i + 1}`}>
                <div className="row">
                    <div className="col-2 p-0">
                        <img src={blaster} alt="Han Solo blaster" className="d-inline-block float-end" style={{ width : 100 }}></img>
                    </div>
                    <div className="col-7 animation-parent">
                        <div className="blaster w-100 animation-child" style={ getBlasterBoltColor() }></div>
                    </div>
                    <div className="col-3">
                        <span className="position-relative" style={{ top : 20 }}>
                            {getImage()}
                            <p className="d-inline-block ms-3 list-item semi-bold">
                                {props.resource === "films" ? item.title : item.name}
                            </p>
                        </span>
                    </div>
                </div>
            </Link>
        )
    })
}

export default List;