//Import React
import React, { useState } from "react";
//Import Components
import ToDoList from "./ToDoList.jsx";
import Form from "./Form.jsx";

const Home = () => {
	//Hooks
	const [input, setInput] = useState([]);
	const [todos, setTodo] = useState([]);

	// changes input text by calling setInput
	const inputTextChanger = ev => {
		setInput(ev.target.value);
	};

	const addTodo = ev => {
		let newTodo = todos.concat([input]);
		setTodo(newTodo);
		setInput("");
	};

	const deleteTodo = index => {
		let delTodo = todos.filter((todo, i) => i !== index);
		setTodo(delTodo);
	};

	return (
		<>
			<Form
				input={input}
				inputTextChanger={inputTextChanger}
				addTodo={addTodo}
				deleteTodo={deleteTodo}
			/>
			<ToDoList todos={todos} />
		</>
	);
};

export default Home;
