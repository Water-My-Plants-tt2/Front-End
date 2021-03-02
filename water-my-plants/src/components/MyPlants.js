import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import AddPlantForm from './AddPlantForm';

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

// Set Submit button to disabled
// Form validation will change this to false when validation passes
const initialDisabled = false;
// const initialPlants = [];

const MyPlants = () => {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors /*setFormErrors*/] = useState(initialFormErrors);
	// const [plants, setPlants] = useState(initialPlants);
	const [disabled /*setDisabled*/] = useState(initialDisabled);

	const getPlants = () => {
		// axios
		// 	.get()
		// 	.then()
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		console.log('useEffect is working');
	};

	const postNewPlant = (newPlant) => {
		// axios
		// 	.get()
		// 	.then()
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
		console.log(newPlant);
		setFormValues(initialFormValues);
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
		</div>
	);
};

export default MyPlants;
