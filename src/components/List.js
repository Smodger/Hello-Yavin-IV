import React from 'react';
import { Link } from 'react-router-dom';
import blaster from '../images/blaster.png';

const List = (props) => {
    return props.list.map((item, i) => {
        return (
            <Link key={i} to={`/${props.resource}/${i + 1}`}>
                <div className="row">
                    <div className="col-2 p-0">
                        <img src={blaster} alt="Han Solo blaster" className="d-inline-block float-end" style={{ width : 100 }}></img>
                    </div>
                    <div className="col-7 animation-parent">
                        <div className="blaster w-100 animation-child"></div>
                    </div>
                    <div className="col-3">
                        <span className="position-relative" style={{ top : 20 }}>
                            <i className="fab fa-jedi-order semi-bold d-none d-md-inline" style={{ fontSize : 20 }}></i>
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