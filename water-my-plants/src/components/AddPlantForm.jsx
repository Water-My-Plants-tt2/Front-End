import React, { useState } from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

// Set initial form values
const initialFormValues = {
	nickname: '',
	species: '',
	h2oFrequency: '',
};

// Set inital form errors
const initialFormErrors = {
	nickname: '',
	species: '',
	h2oFrequency: '',
};

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

	const paperStyle = {
		padding: 20,
		height: '315px',
		width: 250,
		margin: '20px auto',
	};

	const avatarStyle = { backgroundColor: '#A9D884' };

	const inputStyle = {
		margin: '5px auto',
	};

	const submitBtnStyle = {
		marginTop: '10px',
		backgroundColor: '#A9D884',
	};

	return (
		<Grid>
			<Paper elevation={10} style={paperStyle}>
				<Grid align='center'>
					<Avatar style={avatarStyle}>
						<LocalFloristIcon />
					</Avatar>
					<h2>Add A Plant</h2>
				</Grid>

				<form onSubmit={onSubmit}>
					<TextField
						style={inputStyle}
						label='Plant Nickname'
						placeholder='Enter Plant Nickname'
						variant='outlined'
						size='small'
						fullWidth
						required
						name='nickname'
						value={formValues.nickname}
						onChange={onChange}
					/>

					<TextField
						style={inputStyle}
						label='Plant Species'
						placeholder='Enter Plant Species'
						variant='outlined'
						size='small'
						fullWidth
						required
						name='species'
						value={formValues.species}
						onChange={onChange}
					/>

					<TextField
						style={inputStyle}
						label='Water Frequency'
						placeholder='Enter Water Frequency'
						variant='outlined'
						size='small'
						fullWidth
						required
						name='h2oFrequency'
						value={formValues.h2oFrequency}
						onChange={onChange}
					/>

					<Button
						style={submitBtnStyle}
						type='submit'
						color='primary'
						variant='contained'
						fullWidth
						disabled={disabled}
					>
						Submit
					</Button>
				</form>
			</Paper>
		</Grid>
	);
};

export default AddPlantForm;
