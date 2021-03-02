import React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';

const paperStyle = {
	padding: 20,
	height: '390px',
	width: 250,
	margin: '20px auto',
};

const UserPlantCard = (props) => {
	const { name, species, h2o } = props;

	return (
		<Grid>
			<Paper elevation={3} style={paperStyle}>
				<Grid align='center'>
					<img className='plantCard' src='/images/placeholder.jpg' alt={name} />
					<h3>{name}</h3>
					<h3>Species: {species}</h3>
					<h3>Water Frequency: {h2o}</h3>
				</Grid>
				<Button type='submit' color='primary' variant='contained'>
					Edit
				</Button>
				<Button type='submit' color='secondary' variant='contained'>
					Delete
				</Button>
			</Paper>
		</Grid>
	);
};

export default UserPlantCard;
