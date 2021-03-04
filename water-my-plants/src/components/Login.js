import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axios";
import { Link, useHistory } from "react-router-dom";
import { Form } from "./Styling";
import initialFormValues from "../utils/initialFormValues";
import { useHandleUser } from "../utils/useHandleUser";


//user can login to an authenticated session using the credentials provided at account creation / signup.


const LoginForm = ( ) => {
    ///// States /////
    // const { values, submit, change, disabled, update } = props; // pass in yo props
    /*const [ existingUser, setExistingUser ] = useState( initialFormValues );*/
    const [existingUser, setExistingUser, handleInputChange] = useHandleUser(initialFormValues)
    const { username, password } = existingUser;

    const history = useHistory();

    const userLogin = ( user ) => {
        axiosWithAuth()
            .post('/auth/login', user) // two args
            .then( res  => { 
                console.log("POST res: ", res.data.user_id)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.user_id);
                history.push("/plants")
            })
            .catch(( err ) => {
                console.log("Error:", err.response.status, err.response.statusText)
            })
    }

    const handleSubmitForm = ( evt ) => {
        evt.preventDefault();
        if( username && password ){
            userLogin( existingUser );
            setExistingUser( initialFormValues );
        }
    }

    return (
        <Form>
            <div className = "form-header">
                <h2>Login</h2>
            </div>

            <div className = "form-inputs">
                <label className = "form-labels">Username:&nbsp;</label>
                <input 
                    name = "username"
                    type = "text"
                    value = { username }
                    onChange = { e => handleInputChange(e.target) }
                    placeholder = "Username"    
                />
            </div>
            <div className = "form-inputs">
                <label className = "form-labels">Password:&nbsp;</label>
                <input 
                    name = "password"
                    type = "password"
                    value = { password }
                    onChange = { e => handleInputChange(e.target) }
                    placeholder = "Password"    
                />
            </div>
            <div className = "form-inputs">
                <button
                    type = "submit"
                    onClick = { handleSubmitForm }
                    // disabled = { values.username || values.password } // need to modify this to stay disabled until the input fields are complete
                    >Login</button>

                <p className="text-link">Haven't signed up yet? <Link to = "/register" >Register here</Link></p>
            </div>
        </Form>
    );
};

export default LoginForm;