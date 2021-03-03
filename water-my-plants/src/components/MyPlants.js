import React, { useEffect, useState, useContext } from 'react';
import { axiosWithAuth } from '../utils/axios';
import AddPlantForm from './AddPlantForm.js';
import UserPlantCard from './UserPlantCard.js';
import userContext from "../contexts/UserContext";

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
	{
		nickname: 'Test Plant',
		species: 'Plantenstein',
		h2oFrequency: 'Often',
	},
	{
		nickname: 'Test Plant 2',
		species: 'Plantenstein2',
		h2oFrequency: 'Oftener',
	},
];

// Set Submit button to disabled
// Form validation will change this to false when validation passes
const initialDisabled = false;
// const initialPlants = [];

const MyPlants = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors /*setFormErrors*/] = useState(initialFormErrors);
	const [plants, setPlants] = useState(initialPlants);
	const [disabled /*setDisabled*/] = useState(initialDisabled);

	//contains username, id, phone_number//
	const user = useContext(userContext);

	const getPlants = () => {
		axiosWithAuth()
			.get(`/plants/${user.id}`)
			.then((res) => {
				const data = res.data;
				console.log("GET PLANTS DATA: ", data);
				setPlants(data)
			})
			.catch((err) => {
				console.log(err);
			});
		console.log('useEffect is working');
	};

	const postNewPlant = (newPlant) => {
		axiosWithAuth()
			.post(`/plants/${user.id}`, { ...newPlant, user_id:user.id })
			.then((res) => {
				console.log("POST plant: ", res.data)
				setPlants([res.data, ...plants]);
			})
			.catch((err) => {
				console.log({ err });
			});
		console.log(newPlant);
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
		console.log('Form values are changing');
	}, [formValues]);

	return (
		<div className='container'>
			<header>
				<h2>My Plants</h2>
			</header>
			<AddPlantForm
				values={formValues}
				change={inputChange}
				submit={formSubmit}
				disabled={disabled}
				errors={formErrors}
			/>

			{plants.length === 0 ? (
				<h2>Add Your First Plant</h2>
			) : (
				plants.map((plant) => {
					return (
						<UserPlantCard
							key={plant.nickname}
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
