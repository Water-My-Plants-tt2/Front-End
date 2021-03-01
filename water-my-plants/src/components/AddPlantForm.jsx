import React, { useState } from 'react';

// Set initial form values
const initialFormValues = {
	nickname: '',
	species: '',
	h2oFrequency: '',
};

// Set inital form errors
/*const initialFormErrors = {
	nickname: '',
	species: '',
	h2oFrequency: '',
};*/

// Set Submit button to disabled
// Form validation will change this to false when validation passes
const initialDisabled = true;

const AddPlantForm = () => {
	/////////////// State ////////////////////////////
	const [formValues, setFormValues] = useState(initialFormValues);
	const [disabled, setDisabled] = useState(initialDisabled);
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
			`Nickname: ${formValues.nickname}, Species: ${formValues.species}, Water: ${formValues.h2oFrequency}`
		);
	};

	return (
		<div className='form-container' onSubmit={onSubmit}>
			<form>
				<h2>Add A Plant</h2>

				<label>
					Plant Nickname
					<input
						type='text'
						name='nickname'
						value={formValues.nickname}
						onChange={onChange}
					/>
				</label>

				<label>
					Plant Species
					<input
						type='text'
						name='species'
						value={formValues.species}
						onChange={onChange}
					/>
				</label>

				<label>
					Water Frequency
					<input
						type='text'
						name='h2oFrequency'
						value={formValues.h2oFrequency}
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

export default AddPlantForm;
