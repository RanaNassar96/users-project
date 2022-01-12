import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router";
import axios from '../../axios'


const SingleUser = () => {
    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [ user , setUser ] = useState({})

    useEffect( () => {
        

        const getPost = async () => {
            try {
                const res = await axios.get("/users/" + path);
                setUser(res.data);
            } catch (error) {
                
            }
        };
        getPost();

    } , [path])
    return (
        <div className="SingleUser">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src="\images\team2.jpg" alt={user.name} className="img-fluid mb-5" />
                        <h1 className="heading">{user.name}</h1>
                        <p className="title parag">{user.email}</p>
                        <p className=" parag">{user.phone}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleUser;