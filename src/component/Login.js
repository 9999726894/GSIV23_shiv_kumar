import React from "react";
import {  Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="validate-user">
           <Link to={'/home'}>
            <span className="validate-btn">Validate User</span>
           </Link>
        </div>
    )
}

export default Login;