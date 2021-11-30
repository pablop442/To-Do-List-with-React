//Import React
import React, { useState } from "react";
//Import proptypes
import Proptypes from "prop-types";

const Form = props => {
	//prevents default when button is clicked
	const handleSubmit = ev => {
		ev.preventDefault();
	};
	return (
		<>
			<div className="title">
				<h1>ToDo List</h1>
			</div>
			<form className="todo-form" onSubmit={handleSubmit}>
				<input
					className="todo-input"
					type="text"
					placeholder="Type a task"
					value={props.input}
					onChange={props.inputTextChanger}></input>
				<button className="todo-button" onClick={props.addTodo}>
					Add To Do
				</button>
				<button className="todo-button" onClick={props.deleteTodo}>
					Delete To Do
				</button>
			</form>
		</>
	);
};

Form.propTypes = {
	input: Proptypes.array,
	inputTextChanger: Proptypes.func,
	addTodo: Proptypes.func,
	deleteTodo: Proptypes.func
};

export default Form;
