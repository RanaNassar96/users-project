import React from 'react';
import './user.css'
import { Link } from "react-router-dom";

const User = (props) => {
    return (
        <div className="col-md-3">
            <div className="card mb-5">
            <Link to={`/users/${props.user.id}`} className="overlay-link"></Link>
                <img src="\images\team2.jpg" alt={props.user.name} className="img-fluid mb-5" />
                <h1 className="heading">{props.user.name}</h1>
                <p className="title parag">{props.user.email}</p>
                <p className=" parag">{props.user.phone}</p>
            </div>
        </div>
    );
};

export default User;