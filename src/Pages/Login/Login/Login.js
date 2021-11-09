import { getAuth } from '@firebase/auth';
import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css'
const Login = () => {

    const { signInUsingGoogle } = useAuth();

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home#home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }


    return (

        <div id="nav-bar" className="my-5">
            <div className="my-5 py-5 ">
                <h4>Please Login/Google Sign in</h4>
                <button onClick={handleGoogleSignIn} className="btn google "><FcGoogle size="2em" /></button>

            </div>
        </div>

    );
};

export default Login;