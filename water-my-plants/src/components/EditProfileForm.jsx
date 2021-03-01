import React, { useState } from 'react';

// Set initial form values
const initialFormValues = {
	username: '',
	password: '',
	phone_number: '',
};

// Set inital form errors
/*const initialFormErrors = {
	username: '',
	password: '',
	phone_number: '',
};*/

// Set Submit button to disabled
// Form validation will change this to false when validation passes
const initialDisabled = true;

const EditProfileForm = () => {
	/////////////// State ////////////////////////////
	const [formValues, setFormValues] = useState(initialFormValues);
	const [disabled, /*setDisabled*/] = useState(initialDisabled);
	//////////////////////////////////////////////////

	// On change handler
	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		// In case a checkbox is added - may not need
		const valueToUse = type === 'checkbox' ? checked : value;
		// In case handlers are moved
		change(name, valueToUse);
	};

	// Added this in case the handlers are moved to their own components
	const change = (name, value) => {
		setFormValues({ ...formValues, [name]: value });
	};

	// On submit handler
	const onSubmit = (e) => {
		e.preventDefault();
		// For testing - Form values are passed to state
		console.log(
			`Username: ${formValues.username}, Phone Number: ${formValues.phone_number}, Password: ${formValues.password}`
		);
	};

	return (
		<div className='form-container' onSubmit={onSubmit}>
			<form>
				<h2>Edit Profile</h2>

				<label>
					Username
					<input
						type='text'
						name='username'
						value={formValues.username}
						onChange={onChange}
					/>
				</label>

				<label>
					Phone Number
					<input
						type='text'
						name='phone_number'
						value={formValues.phone_number}
						onChange={onChange}
					/>
				</label>

				<label>
					Password
					<input
						type='password'
						name='password'
						value={formValues.password}
						onChange={onChange}
					/>
				</label>

				<div className='btn'>
					<button disabled={disabled} type='submit'>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default EditProfileForm;
