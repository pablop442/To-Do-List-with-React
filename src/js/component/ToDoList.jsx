//Import React
import React, { useState } from "react";
// //Import proptypes
import Proptypes from "prop-types";

const ToDoList = props => {
	return (
		<>
			<div className="list">
				<ul>
					{props.todos.map((todo, i) => (
						<li key={i} className="list-element">
							{" "}
							{todo}{" "}
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

ToDoList.propTypes = {
	todos: Proptypes.array
};
export default ToDoList;
