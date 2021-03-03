import './App.css';
import React from 'react';
import { useHistory } from "react-router-dom";

// Custom Imports
import { Button } from '@material-ui/core';

import heroImg from "../src/components/Assets/bgFoliage.jpg";
// import Form from "./components/Styling";
// console.log(heroImg);



function App() {
	
	const history = useHistory();
	
	const onClick = (string, evt) => {
		evt.preventDefault();
		console.log(string);
		history.push(string);
	}

	console.log(window.location.pathname)

	return (
		<div className='App'>
			<div className = "header-container imgBanner" style={{ backgroundImage: `url(${heroImg})` }} >
				<h1>Water My Plants</h1>
				<Button onClick = { evt => onClick("/", evt)}>Home</Button>	
				<Button onClick = { evt => onClick("/login", evt )}>Login </Button>
				<Button onClick = { evt => onClick("/register", evt )}>Register</Button>
				<Button onClick	= { evt => onClick("/plants", evt)}>Plants</Button>
				<Button onClick	= { evt => onClick("/profile", evt)}>Profile</Button>
			</div>
		</div>
	);
}

export default App;