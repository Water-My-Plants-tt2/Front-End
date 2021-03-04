import React, { useState, useEffect, useRef } from 'react';
import { axiosWithAuth } from '../utils/axios';
import EditProfileForm from './EditProfileForm';
import initialFormValues from "../utils/initialFormValues";
import { useHandle } from "../utils/useHandle";

//Authenticated user can update their phoneNumber and password.
//Authenticated user can update their phoneNumber and password.

// Set inital form errors
const initialFormErrors = {
	username: '',
	password: '',
	phone_number: '',
};

// Set Submit button to disabled
// Form validation will change this to false when validation passes
const initialDisabled = false;

const EditProfile = () => {
	const userId = useRef(localStorage.getItem("id"));
	const [formValues, setFormValues, inputChangeTest] = useHandle(initialFormValues)

	const [formErrors /*setFormErrors*/] = useState(initialFormErrors);
	const [disabled /*setDisabled*/] = useState(initialDisabled);

	const getProfile = () => {
		axiosWithAuth()
		  .get(`/users/${userId.current}`)
		  .then(res => {
			  setFormValues({...formValues, username:res.data.username, phone_number:res.data.phone_number})
		  })
		  .catch(err => {
		    console.log({err});
		  })
		console.log('Profile useEffect is working');
	};

	const updateProfile = (newValues) => {
		axiosWithAuth()
		  .put(`/auth/${userId.current}/update`, {...formValues, user_id:userId.current})
		  .then(res => {
			  console.log("PUT res: ", res.data.message)
			  getProfile();
		  })
		  .catch(err => {
			  alert(err.response.data.message);
			  getProfile();
		  })
		console.log(newValues);
		setFormValues(initialFormValues);
	};

	const formSubmit = () => {
		const newValues = {
			username: formValues.username.trim(),
			password: formValues.password,
			phone_number: formValues.phone_number.trim(),
		};
		updateProfile(newValues);
	};

	useEffect(() => {
		getProfile();
	}, []);

	useEffect(() => {
		// setDisabled checks
		console.log('Form values are changing');
	}, [formValues]);

	return (
		<div>
			<h2>Profile</h2>
			<p>{}</p>
			<EditProfileForm
				values={formValues}
				change={inputChangeTest}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>
		</div>
	);
};

export default EditProfile;
