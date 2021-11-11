import React from "react";
import { NavLink } from 'react-router-dom';

const Error = () => {
    return(
        <>
            <div style={{textAlign:'center', marginTop: 250}}>
                <h1>404 Error Page</h1>
                <p>Sorry, This page doesn't exist</p>
                <NavLink to="/">Go Back</NavLink>
            </div>
        </>
    );
    
};
export default Error;