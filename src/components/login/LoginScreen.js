import React, { useContext, useReducer } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

export const LoginScreen = ( { history } ) => {

    const { dispatch } = useContext( AuthContext );

    const handleLogin = () =>{
        const action = {
            type: types.login,
            payload: { name: 'guest' }
        }

        dispatch( action );        

        // history.push('/');
        
        const lastPatch = localStorage.getItem('lastPath') || '/';
        history.replace( lastPatch );
    };

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}