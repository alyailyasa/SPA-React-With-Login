import React from "react";
import { Link } from 'react-router-dom';

const Error = () => {
    return(
        <div style={{textAlign:'center', marginTop: 250}}>
            <h1 style={{color:'red'}} >404 Error Page</h1>
            <p>Sorry, This page doesn't exist</p>
            <Link to="/" >
                <button className="button" type="button">Go Back</button>
            </Link>
        </div>
    );
};

export default Error;