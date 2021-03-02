import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axios";
import { Link, useHistory } from "react-router-dom";

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
    const history = useHistory();

    const userLogin = ( user ) => {
        axiosWithAuth()
            .post('/auth/login', user) // two args
            .then( res  => { // this is incomplete, will add in info in a bit
                console.log(res)
                localStorage.setItem("token", res.data.token)
                history.push("/plants")

            })
            .catch(( err ) => {
                console.log("Error:", err.response.status, err.response.statusText)
            })
    }

    ///// Handlers /////
    const handleInputChange = ( evt ) => {
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
                <h2>Login</h2>
            </div>

            <div className = "form-inputs">
                <label className = "form-labels">Username:&nbsp;</label>
                <input 
                    name = "username"
                    type = "text"
                    value = { username }
                    onChange = { handleInputChange }
                    placeholder = "Username"    
                />
            </div>
            <div className = "form-inputs">
                <label className = "form-labels">Password:&nbsp;</label>
                <input 
                    name = "password"
                    type = "password"
                    value = { password }
                    onChange = { handleInputChange }
                    placeholder = "Password"    
                />
            </div>
            <div className = "form-inputs">
                <button
                    type = "submit"
                    onClick = { handleSubmitForm }>Login</button>

                <p className="text-link">Haven't signed up yet? <Link to = "/register" >Register here</Link></p>
            </div>
        </form>
    );
};

export default LoginForm;