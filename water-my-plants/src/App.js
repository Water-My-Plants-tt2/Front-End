import './App.css';
import React from 'react';
import { useHistory } from "react-router-dom";

// Custom Imports
import { Button } from '@material-ui/core';

function App() {
	
	const history = useHistory();
	
	const onClick = (string, evt) => {
		evt.preventDefault();
		history.push(string);
	}

	return (
		<div className='App'>
			<div className = "header-container"  >
				<h1>Water My Plants</h1>

				<div className = "navigation">
					<Button onClick = { evt => onClick("/home", evt)}>Home</Button>	
					<Button onClick = { evt => onClick("/login", evt )}>Login </Button>
					<Button onClick = { evt => onClick("/register", evt )}>Register</Button>
					<Button onClick	= { evt => onClick("/plants", evt)}>Plants</Button>
					<Button onClick	= { evt => onClick("/profile", evt)}>Profile</Button>
				</div>
			</div>
			
		</div>
	);
}

export default App;