import React from 'react';
import { Avatar, Button, Grid, Paper, TextField } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';

const EditProfileForm = (props) => {
	const { values, change, submit, disabled } = props;

	// On change handler
	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		// In case a checkbox is added - may not need
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	};

	// On submit handler
	const onSubmit = (e) => {
		e.preventDefault();
		// For testing - Form values are passed to state
		console.log(
			`Username: ${values.username}, Phone Number: ${values.phone_number}, Password: ${values.password}`
		);
		submit();
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
						<PersonIcon />
					</Avatar>
					<h2>Edit Profile</h2>
				</Grid>

				<form onSubmit={onSubmit}>
					<TextField
						style={inputStyle}
						label='Update Username'
						placeholder='Update Username'
						variant='outlined'
						size='small'
						fullWidth
						name='username'
						value={values.username}
						onChange={onChange}
					/>

					<TextField
						style={inputStyle}
						label='Update Phone number'
						placeholder='Update Phone Number'
						variant='outlined'
						size='small'
						fullWidth
						name='phone_number'
						value={values.phone_number}
						onChange={onChange}
					/>

					<TextField
						style={inputStyle}
						label='Update Password'
						placeholder='Update Password'
						variant='outlined'
						size='small'
						fullWidth
						name='password'
						value={values.password}
						type='password'
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

export default EditProfileForm;