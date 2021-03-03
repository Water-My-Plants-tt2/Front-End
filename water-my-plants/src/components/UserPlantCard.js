import React, { useState } from 'react';
import {
	Avatar,
	Button,
	Grid,
	Modal,
	Paper,
	TextField,
	Typography,
} from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';

const UserPlantCard = (props) => {
	const { nickname, species, h2oFrequency, submitEditPlant, plantId } = props;

	const initialEditValues = {
		nickname,
		species,
		h2oFrequency,
		plantId,
	};

	const [editPlantValues, setEditPlantValues] = useState(initialEditValues);

	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	// On submit handler
	const onSubmit = (e) => {
		e.preventDefault();
		submitEditPlant(editPlantValues, plantId);
		setOpen(false);
		setEditPlantValues(editPlantValues);
		//
	};

	// On change handler
	const onChange = (e) => {
		const { name, value, type, checked } = e.target;
		const valueToUse = type === 'checkbox' ? checked : value;
		inputChange(name, valueToUse);
	};

	const inputChange = (name, value) => {
		setEditPlantValues({ ...editPlantValues, [name]: value });
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

	const editBtnStyle = {
		backgroundColor: '#A9D884',
	};

	return (
		<Grid id={plantId}>
			<Paper elevation={3} style={paperStyle}>
				<Grid align='center'>
					<img
						className='plantCard'
						src='/images/placeholder.jpg'
						alt={nickname}
					/>
					<h3 id={'nickname' + plantId} className='plant-name'>
						{nickname}
					</h3>
					<p id={'species' + plantId} className='plant-species'>
						Species: {species}
					</p>
					<p id={'water' + plantId} className='plant-water'>
						Water Frequency: {h2oFrequency}
					</p>
				</Grid>
				<Grid className='card-btn-grid'>
					<Button
						size='small'
						style={editBtnStyle}
						type='submit'
						color='primary'
						variant='contained'
						onClick={handleOpen}
					>
						Edit
					</Button>
					<Button
						size='small'
						type='submit'
						color='secondary'
						variant='contained'
					>
						Delete
					</Button>
				</Grid>
			</Paper>
			<Modal
				open={open}
				onClose={handleClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{ timeout: 500 }}
			>
				<Fade in={open}>
					<Grid className='add-plant'>
						<Paper elevation={10} style={paperStyle}>
							<Grid align='center'>
								<Avatar style={avatarStyle}>
									<LocalFloristIcon />
								</Avatar>
								<h2>Edit Plant</h2>
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
									value={editPlantValues.nickname}
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
									value={editPlantValues.species}
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
									value={editPlantValues.h2oFrequency}
									onChange={onChange}
								/>

								<Button
									style={submitBtnStyle}
									type='submit'
									color='primary'
									variant='contained'
									fullWidth
									// disabled={disabled}
								>
									Submit
								</Button>

								<Typography
									align='center'
									style={cancelBtn}
									onClick={handleClose}
								>
									CANCEL
								</Typography>
							</form>
						</Paper>
					</Grid>
				</Fade>
			</Modal>
		</Grid>
	);
};

export default UserPlantCard;
