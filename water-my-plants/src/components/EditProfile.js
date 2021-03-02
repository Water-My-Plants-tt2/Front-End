import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import EditProfileForm from './EditProfileForm';

//Authenticated user can update their phoneNumber and password.
//Authenticated user can update their phoneNumber and password.

// Set initial form values
const initialFormValues = {
	username: '',
	password: '',
	phone_number: '',
};

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
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors /*setFormErrors*/] = useState(initialFormErrors);
	const [disabled /*setDisabled*/] = useState(initialDisabled);

	const getProfile = () => {
		// axios
		//   .get()
		//   .then()
		//   .catch(err => {
		//     console.log(err);
		//   })
		console.log('Profile useEffect is working');
	};

	const updateProfile = (newValues) => {
		// axios
		//   .put()
		//   .then()
		//   .catch(err => {
		//     console.log(err);
		//   })
		console.log(newValues);
		setFormValues(initialFormValues);
	};

	const inputChange = (name, value) => {
		// Validation
		/////////////
		setFormValues({
			...formValues,
			[name]: value,
		});
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
			<EditProfileForm
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>
		</div>
	);
};

export default EditProfile;
