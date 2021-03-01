import React, { useState } from "react";
import axios from "axios";
import Link from "react-router-dom";

//user can sign-up / create an account by providing a unique username, a valid mobile phoneNumber and a password.

///// Initial Form Values /////
const {  } = props; // pass in shizzz here from app.js

const initialNewUser = {
    username: '',
    phoneNumber: '',
    password: ''
}
///// States /////
const [ newUser, setNewUser ] = useState( initialNewUser );
const { username, phoneNumber, password } = newUser;

const RegisterForm = props => {

    const userSignUp = ( newUser ) => {
        axios
            .post('', newUser )
            .then(( res ) => {

            })
            .catch(( err ) => {
                console.log( err, "here's your error!" );
            })
    }
    ///// Handlers ///// 
    const handleInputChange = (evt) => {
        setNewUser({ ...newUser, [ evt.target.id ]: evt.target.value })
    }

    const handleSubmitForm = (evt) => {
        if( username && phoneNumber && password ){
            evt.preventDefault();
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
                        name = "phonenumber"
                        type = "phonenumber"
                        value = { phonenumber }
                        onChange = { handleInputChange }
                        placeholder = "Phone Number"                    
                    />
                
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Password</label>
                    <input 
                        name = "password"
                        type = "password"
                        value = "password"
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