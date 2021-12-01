//Import React
import React, { useState } from "react";
//Import Components
import Item from "./Item.jsx";
import Form from "./Form.jsx";

const ToDoList = () => {
	//Hooks
	const [input, setInput] = useState([]);
	const [todos, setTodo] = useState([]);

	// Allows the input to change
	const inputTextChanger = ev => {
		setInput(ev.target.value);
	};
	// Adds a new task and clears input
	const addTodo = ev => {
		let newTodo = todos.concat([input]);
		setTodo(newTodo);
		setInput("");
	};
	//Deletes all task from list
	const deleteTodo = () => {
		let delTodo = todos.splice(todos.length);
		setTodo(delTodo);
	};

	//Delete task when is clicked
	const removeTodo = index => {
		const newArray = todos.filter((item, i) => i != index);
		setTodo(newArray);
	};

	return (
		<>
			<Form
				input={input}
				inputTextChanger={inputTextChanger}
				addTodo={addTodo}
				deleteTodo={deleteTodo}
			/>
			<div className="list">
				<ul>
					{todos.map((todo, i) => (
						<Item
							key={i}
							todo={todo}
							removeTodo={() => removeTodo(i)}
						/>
					))}
				</ul>
			</div>
		</>
	);
};

export default ToDoList;
