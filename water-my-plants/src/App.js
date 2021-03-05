import './App.css';
import React from 'react';
import { useHistory } from "react-router-dom";

// Custom Imports
import { Button } from '@material-ui/core';

function App() {
	
	const history = useHistory();
	
	const onClick = (string, evt) => {
		evt.preventDefault();
		// console.log(string);
		history.push(string);
	}

	const handleLogout = () => {
		localStorage.removeItem('id');
		localStorage.removeItem('token');
		window.location.reload();
	}

	return (
		<div className='App'>
			<div className = "header-container"  >
				<h1>Water My Plants</h1>

				<div className = "navigation">
					{ 
						!localStorage.getItem('id') &&
						<div>
							<Button onClick = { evt => onClick("/login", evt )}>Login </Button>
							<Button onClick = { evt => onClick("/register", evt )}>Register</Button>
						</div>
					}

							<Button onClick = { evt => onClick("/home", evt)}>Home</Button>	

					{
						localStorage.getItem('id') &&
						<div>							
							<Button onClick	= { evt => onClick("/plants", evt)}>Plants</Button>

							<Button onClick	= { evt => onClick("/profile", evt)}>Profile</Button>

							<Button onClick={handleLogout}>Logout</Button>
						</div>
					}
				</div>
			</div>
		</div>
	);
}

export default App;