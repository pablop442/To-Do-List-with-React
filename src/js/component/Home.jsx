//Import React
import React, { useState } from "react";
//Import Components
import ToDoList from "./ToDoList.jsx";
import Form from "./Form.jsx";
import Todo from "./ToDo.jsx";

const Home = () => {
	//Hooks
	const [input, setInput] = useState([]);
	const [todos, setTodo] = useState([]);

	//prevents default when button is clicked
	const handleSubmit = ev => {
		ev.preventDefault();
	};

	// changes input text by calling setInput
	const inputTextChanger = ev => {
		setInput(ev.target.value);
	};

	const addTodo = ev => {
		let newTodo = todos.concat([input]);
		setTodo(newTodo);
		setInput("");
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
					value={input}
					onChange={inputTextChanger}></input>
				<button className="todo-button" onClick={addTodo}>
					Add To Do
				</button>
			</form>
			{/* List  */}
			<ul className="list">
				{todos.map((todo, i) => (
					<li key={i}> {todo} </li>
				))}
			</ul>
		</>
	);
};

export default Home;
