import React from 'react';
import './BreadScrum.css'
import {NavLink} from "react-router-dom";

const BreadScrum = (props) => {
    console.log(props)

    return (
        <div className="breadscrum">
            {/*<span onClick={ ()=> props.history.goBack() }>Back</span> / {props.id}*/}
            <NavLink to={'/page/5'}>Back</NavLink> / {props.id}
        </div>
    );
};

export default BreadScrum;