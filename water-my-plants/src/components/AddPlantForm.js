import React from 'react';
import {
	Avatar,
	Button,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

const AddPlantForm = (props) => {
	const { values, change, submit, disabled, cancel } = props;

	// On submit handler
	const onSubmit = (e) => {
		e.preventDefault();
		submit();
		cancel();
	};

	// On change handler
	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		// In case a checkbox is added - may not need
		const valueToUse = type === 'checkbox' ? checked : value;
		change(name, valueToUse);
	};

	const paperStyle = {
		padding: 20,
		height: 'auto',
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

	const cancelBtn = {
		fontSize: 12,
		color: 'lightgrey',
		marginTop: 5,
		cursor: 'pointer',
	};

	return (
		<Grid className='add-plant'>
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
						label='Plant Name'
						placeholder='Enter Plant Name'
						variant='outlined'
						size='small'
						fullWidth
						required
						name='nickname'
						value={values.nickname}
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
						value={values.species}
						onChange={onChange}
					/>

					<TextField
						style={inputStyle}
						label='Watering Frequency'
						placeholder='Enter Water Frequency'
						variant='outlined'
						size='small'
						fullWidth
						required
						name='h2oFrequency'
						value={values.h2oFrequency}
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

					<Typography align='center' style={cancelBtn} onClick={cancel}>
						CANCEL
					</Typography>
				</form>
			</Paper>
		</Grid>
	);
};

export default AddPlantForm;
