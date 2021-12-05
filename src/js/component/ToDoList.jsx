import React, { useState } from "react";
import Item from "./Item.jsx";
import Form from "./Form.jsx";

const ToDoList = () => {
	//Hooks
	const [input, setInput] = useState([]);
	const [todos, setTodo] = useState([]);

	
	const inputTextChanger = ev => {
		setInput(ev.target.value);
	};
	
	const addTodo = ev => {
		let newTodo = todos.concat([input]);
		setTodo(newTodo);
		setInput("");
	};

	const deleteTodo = () => {
		let delTodo = todos.splice(todos.length);
		setTodo(delTodo);
	};

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
