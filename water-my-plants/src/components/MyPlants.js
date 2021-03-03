import React, { useContext, useEffect, useState } from 'react';
import { axiosWithAuth } from '../utils/axios';
import { Avatar, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddPlantForm from './AddPlantForm.js';
import UserPlantCard from './UserPlantCard.js';
import userContext from '../contexts/userContext';

//Landing Page after Login
//Authenticated user can Create, Update and Delete a plant object. At a minimum, each plant must have the following properties:
//id: Integer
//nickname: String
//species : String
//h2oFrequency: Type determined by implementation
//image: (optional)
//Authenticated user can view a list of created plants.
//A plant can be deleted or selected to present user with a detail view where user can then update any property of the selected plant.

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

const initialPlants = [
	// {
	// 	nickname: 'Test Plant',
	// 	species: 'Plantenstein',
	// 	h2oFrequency: 'Often',
	// },
	// {
	// 	nickname: 'Test Plant 2',
	// 	species: 'Plantenstein2',
	// 	h2oFrequency: 'Oftener',
	// },
];

// Set Submit button to disabled
// Form validation will change this to false when validation passes
const initialDisabled = true;
// const initialPlants = [];

const MyPlants = () => {
	const userState = useContext(userContext);
	console.log(userState);

	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors /*setFormErrors*/] = useState(initialFormErrors);
	const [plants, setPlants] = useState(initialPlants);
	const [disabled, setDisabled] = useState(initialDisabled);

	const [showAddForm, setShowAddForm] = useState(false);

	const getPlants = () => {
		axiosWithAuth()
			.get(`/plants/${userState.id}`)
			.then((res) => {
				const data = res.data;
				setPlants(data);
			})
			.catch((err) => {
				console.log(err);
			});
		console.log('useEffect is working');
	};

	const postNewPlant = (newPlant) => {
		axiosWithAuth()
			.post(`/plants/${userState.id}`, { ...newPlant, user_id: userState.id })
			.then((res) => {
				setPlants([res.data, ...plants]);
			})
			.catch((err) => {
				console.log({ err });
			});
		setFormValues(initialFormValues);
	};

	// const editPlant = () => {
	// 	axiosWithAuth()
	// 		.put()
	// 		.then()
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// };

	const inputChange = (name, value) => {
		setFormValues({ ...formValues, [name]: value });
	};

	const formSubmit = () => {
		const newPlant = {
			nickname: formValues.nickname.trim(),
			species: formValues.species.trim(),
			h2oFrequency: formValues.h2oFrequency.trim(),
		};
		postNewPlant(newPlant);
	};

	useEffect(() => {
		getPlants();
	}, []);

	useEffect(() => {
		!formValues.species || !formValues.nickname || !formValues.h2oFrequency
			? setDisabled(true)
			: setDisabled(false);
	}, [formValues]);

	const avatarStyle = {
		backgroundColor: '#A9D884',
		cursor: 'pointer',
	};

	const showAddPlantForm = () => {
		// Toggle form hidden
		setShowAddForm(true);
		// Toggle add-plant hidden
		console.log('click');
	};

	const cancelClick = () => {
		setShowAddForm(false);
	};

	return (
		<div className='container'>
			<header>
				<h2>My Plants</h2>
				<div className='add-plant'>
					<Grid>
						<h2>Add A Plant</h2>
						<Avatar style={avatarStyle}>
							<AddIcon onClick={showAddPlantForm} />
						</Avatar>
					</Grid>
				</div>
			</header>
			{showAddForm ? (
				<AddPlantForm
					values={formValues}
					change={inputChange}
					submit={formSubmit}
					disabled={disabled}
					errors={formErrors}
					cancel={cancelClick}
				/>
			) : null}

			{plants.length === 0 ? (
				<div className='add-plant'>
					<Grid align='center'>
						<h2>Add Your First Plant</h2>
						<Avatar style={avatarStyle}>
							<AddIcon onClick={showAddPlantForm} />
						</Avatar>
					</Grid>
				</div>
			) : (
				plants.map((plant) => {
					return (
						<UserPlantCard
							key={plant.plant_id}
							name={plant.nickname}
							species={plant.species}
							h2o={plant.h2oFrequency}
						/>
					);
				})
			)}
		</div>
	);
};

export default MyPlants;
