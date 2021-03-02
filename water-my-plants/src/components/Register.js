import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axios";
import { Link, useHistory } from "react-router-dom";

//user can sign-up / create an account by providing a unique username, a valid mobile phoneNumber and a password.

///// Initial Form Values /////
const initialNewUser = {
    username: '',
    phone_number: '',
    password: ''
}

const RegisterForm = props => {
    //const {  } = props; // pass in shizzz here from app.js
    const history = useHistory();
    
    ///// States /////
    const [ newUser, setNewUser ] = useState( initialNewUser );
    const { username, phone_number, password } = newUser;
    
    const userSignUp = ( newUser ) => {
        axiosWithAuth()
            .post('/auth/register', newUser )
            .then(( res ) => {
                console.log(res)
                history.push("/login");
            })
            .catch(( err ) => {
                console.log("Error:", err.response.status, err.response.statusText);
            })
    }
    ///// Handlers ///// 
    const handleInputChange = (evt) => {
        setNewUser({ ...newUser, [ evt.target.name ]: evt.target.value })
    }

    const handleSubmitForm = (evt) => {
        evt.preventDefault();
        if( username && phone_number && password ){
            userSignUp( newUser );
            setNewUser( initialNewUser);
        }
    }

    return(
        <form>
            <div className = "form-header">
                <h1>---Register---</h1>
                <p>Only moments away to using our App</p>
                <br/>
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Username</label>
                    <input 
                        name = "username"
                        type = "text"
                        value = { username }
                        onChange = { handleInputChange }
                        placeholder = "Username"
                    />
                
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Phone Number</label>
                    <input 
                        name = "phone_number"
                        type = "tel"
                        value = { phone_number }
                        onChange = { handleInputChange }
                        placeholder = "Phone Number"                    
                    />
                
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Password</label>
                    <input 
                        name = "password"
                        type = "password"
                        value = { password }
                        onChange = { handleInputChange }
                        placeholder = "Password"
                    />
            </div>

            <button
                type = "submit"
                onClick = { handleSubmitForm }>Register</button>

            <div>
                <p className = "text-link"><Link to = "/login"> Already have an account, click here</Link>
                </p>
            </div>
            
        </form>
    )
}

export default RegisterForm;