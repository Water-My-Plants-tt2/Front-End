import React, { useContext, useState } from "react";
import {axiosWithAuth} from "../utils/axios";
import { Link, useHistory } from "react-router-dom";
import { Form } from "./Styling";
import userContext from "../contexts/userContext";

//user can login to an authenticated session using the credentials provided at account creation / signup.
///// Initial Form Values /////
const initialExistingUser = {
    username: "",
    password: ""
}

const LoginForm = ( props ) => {
    //const userState = useContext(userContext);
    
    ///// States /////
    // const { values, submit, change, disabled, update } = props; // pass in yo props
    const [ existingUser, setExistingUser ] = useState( initialExistingUser );
    const { username, password } = existingUser;

    const history = useHistory();

    const userLogin = ( user ) => {
        axiosWithAuth()
            .post('/auth/login', user) // two args
            .then( res  => { // this is incomplete, will add in info in a bit
                console.log("POST res: ", res.data.user_id)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("id", res.data.user_id);
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
        // submit();
        if( username && password ){
            userLogin( existingUser );
            setExistingUser( initialExistingUser );
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
                    onClick = { handleSubmitForm }
                    // disabled = { values.username || values.password } // need to modify this to stay disabled until the input fields are complete
                    >Login</button>

                <p className="text-link">Haven't signed up yet? <Link to = "/register" >Register here</Link></p>
            </div>
        </Form>
    );
};

export default LoginForm;