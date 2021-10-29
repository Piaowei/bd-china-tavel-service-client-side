import { getAuth } from '@firebase/auth';
import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Link, useHistory, useLocation } from 'react-router-dom';
const Login = () => {

    const { signInUsingGoogle } = useAuth();

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleSignIn = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })

    }


    return (
        <div>
            <h4>Please Login</h4>
            <button onClick={handleGoogleSignIn} className="btn btn-warning rounded-circle ">Google Sign in</button>
        </div>
    );
};

export default Login;