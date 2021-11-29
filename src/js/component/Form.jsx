//Import React
// import React, { useState } from "react";
//Import proptypes
// import Proptypes from "prop-types";

// const Form = ({ addTodo }) => {
// 	//Hooks
// 	const [input, setInput] = useState([]);

// 	//prevents default when button is clicked
// 	const handleSubmit = ev => {
// 		ev.preventDefault();
// 	};

// 	// changes input text by calling setInput
// 	const inputTextChanger = ev => {
// 		setInput(ev.target.value);
// 	};

// 	return (
// 		<>
// 			<div className="title">
// 				<h1>ToDo List</h1>
// 			</div>
// 			<form className="todo-form" onSubmit={handleSubmit}>
// 				<input
// 					className="todo-input"
// 					type="text"
// 					placeholder="Type a task"
// 					value={inputTextChanger}
// 					onChange={}
// 					></input>
// 				<button className="todo-button">Add To Do</button>
// 			</form>
// 		</>
// 	);
// };

// export default Form;

// Form.propTypes = {
// 	addTodo: Proptypes.func
// };
