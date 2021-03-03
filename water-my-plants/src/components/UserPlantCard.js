import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

const paperStyle = {
	padding: 20,
	height: 'auto',
	width: 250,
	margin: '20px auto',
};

const UserPlantCard = (props) => {
	const { name, species, h2o } = props;

	const editBtnStyle = {
		backgroundColor: '#A9D884',
	};

	return (
		<Grid>
			<Paper elevation={3} style={paperStyle}>
				<Grid align='center'>
					<img className='plantCard' src='/images/placeholder.jpg' alt={name} />
					<h3>{name}</h3>
					<h3>Species: {species}</h3>
					<h3>Water Frequency: {h2o}</h3>
				</Grid>
				<Grid className='card-btn-grid'>
					<Button
						size='small'
						style={editBtnStyle}
						type='submit'
						color='primary'
						variant='contained'
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
		</Grid>
	);
};

export default UserPlantCard;
