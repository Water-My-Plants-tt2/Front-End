import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//user can login to an authenticated session using the credentials provided at account creation / signup.
///// Initial Form Values /////
const initialExistingUser = {
    username: "",
    password: ""
}

const LoginForm = ( props ) => {
    
    ///// States /////
    const [ existingUser, setExistingUser ] = useState( initialExistingUser );
    const { username, password } = existingUser;

    //const {  } = props; // pass in yo props

    const userLogin = ( user ) => {
        axios
            .post( 'https://greenthumbs-tt2.herokuapp.com/api/', ) // two args
            .then(( res ) => { // this is incomplete, will add in info in a bit

            })
            .catch(( err ) => {
                console.log( err, "nah, we got problems" )
            })
    }

    ///// Handlers /////
    const handleInputChange = ( evt ) => {
        console.log(evt.target)
        setExistingUser({
            ...existingUser,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmitForm = ( evt ) => {
        evt.preventDefault();
        if( username && password ){
            userLogin( existingUser );
            setExistingUser( initialExistingUser );
        }
    }

    return (
        <form>
            <div className = "form-header">
                <h2>Login/Register</h2>
            </div>

            <div className = "form-inputs">
                <label className = "form-labels">Username</label>
                <input 
                    name = "username"
                    type = "text"
                    value = { username }
                    onChange = { handleInputChange }
                    placeholder = "Username"    
                />

                <label className = "form-labels">Password</label>
                <input 
                    name = "password"
                    type = "password"
                    value = { password }
                    onChange = { handleInputChange }
                    placeholder = "Password"    
                />

                <button
                    type = "submit"
                    onClick = { handleSubmitForm }>Login</button>

                <p className="text-link">Haven't signed up yet? <Link to = "/register" >Register here</Link></p>
            </div>

            <div>
                <p className = "text-link"><Link to = "/">Already a member, login here!</Link></p>
            </div>
        </form>
    );
};

export default LoginForm;