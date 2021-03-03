import React, { useEffect, useState, useRef } from 'react';
import { axiosWithAuth } from '../utils/axios';
import { Avatar, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AddPlantForm from './AddPlantForm.js';
import UserPlantCard from './UserPlantCard.js';

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
	const userId = useRef(localStorage.getItem('id'));

	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors /*setFormErrors*/] = useState(initialFormErrors);
	const [plants, setPlants] = useState(initialPlants);
	const [disabled, setDisabled] = useState(initialDisabled);

	const [showAddForm, setShowAddForm] = useState(false);

	const getPlants = () => {
		axiosWithAuth()
			.get(`/plants/${userId.current}`)
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
			.post(`/plants/${userId.current}`, {
				...newPlant,
				user_id: userId.current,
			})
			.then((res) => {
				setPlants([res.data, ...plants]);
			})
			.catch((err) => {
				console.log({ err });
			});
		setFormValues(initialFormValues);
	};

	const editPlantInfo = (editPlant, id) => {
		axiosWithAuth()
			.put(`/plants/${id}`, {
				...editPlant,
				user_id: userId.current,
			})
			.then((res) => {
				const data = res.config;
				// const plantCard = document.getElementById(`${id}`);
				const plantName = document.getElementById(`nickname${id}`);
				const plantSpecies = document.getElementById(`species${id}`);
				const plantWater = document.getElementById(`water${id}`);

				plantName.textContent = editPlant.nickname;
				plantSpecies.textContent = `Species: ${editPlant.species}`;
				plantWater.textContent = `Water Frequency: ${editPlant.h2oFrequency}`;

				console.log(data);
			})
			.catch((err) => {
				console.log({ err });
			});

		console.log(editPlant);
	};

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

	console.log(plants);

	const submitEditPlant = (values, id) => {
		const editPlant = {
			nickname: values.nickname.trim(),
			species: values.species.trim(),
			h2oFrequency: values.h2oFrequency.trim(),
		};

		editPlantInfo(editPlant, id);
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
		setShowAddForm(true);
	};

	const cancelClick = () => {
		setShowAddForm(false);
		setFormValues(initialFormValues);
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
							nickname={plant.nickname}
							species={plant.species}
							h2oFrequency={plant.h2oFrequency}
							change={inputChange}
							values={formValues}
							submitEditPlant={submitEditPlant}
							cancel={cancelClick}
							plantId={plant.plant_id}
						/>
					);
				})
			)}
		</div>
	);
};

export default MyPlants;
