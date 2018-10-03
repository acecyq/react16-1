import React from 'react';

const UserInput = (props) => {
	return(
		<div className="userInput">
			<label htmlFor="userInput">User Input</label>
			<input className="userInput" type="text" onChange={props.userInputChange} value={props.value}></input>
		</div>
	);
}

export default UserInput;