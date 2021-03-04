import React, { useState } from "react";
import {axiosWithAuth} from "../utils/axios";
import { Link, useHistory } from "react-router-dom";
import { Form } from "./Styling";
import initialFormValues from "../utils/initialFormValues";

//user can sign-up / create an account by providing a unique username, a valid mobile phoneNumber and a password.

const RegisterForm = () => {
    //const {  } = props; // pass in shizzz here from app.js
    const history = useHistory();
    
    ///// States /////
    const [ newUser, setNewUser ] = useState( initialFormValues );
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
            setNewUser( initialFormValues);
        }
    }

    return(
        <Form>
            <div className = "form-header">
                <h2>Register</h2>
                <p>Fill out your info below</p>
                <br/>
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Username:&nbsp;</label>
                    <input 
                        name = "username"
                        type = "text"
                        value = { username }
                        onChange = { handleInputChange }
                        placeholder = "Username"
                    />
                
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Phone Number:&nbsp;</label>
                    <input 
                        name = "phone_number"
                        type = "tel"
                        value = { phone_number }
                        onChange = { handleInputChange }
                        placeholder = "Phone Number"                    
                    />
                
            </div>

            <div className = "form-inputs">
                <label className = "form-label">Password:&nbsp;</label>
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
                onClick = { handleSubmitForm }
                // disabled = {  }
                >Register</button>

            <div>
                <p className = "text-link">Already have an account, <Link to = "/login"> click here!</Link>
                </p>
            </div>
            
        </Form>
    )
}

export default RegisterForm;