import React from 'react';
import './users.css'
import User from '../user/User'

const Users = (props) => {
    return (
        <div className="posts-section">
            <div className="container">
                <div className="row">
                    {
                        props.users.map( ( user ) => <User key={user.id} user={user} /> )
                    }
                </div>
            </div>
        </div>
    );
};

export default Users;