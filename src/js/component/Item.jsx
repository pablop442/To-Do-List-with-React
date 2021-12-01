//Import React
import React, { useState } from "react";

// //Import proptypes
import Proptypes from "prop-types";

//Import resources
import { BsFillTrashFill } from "react-icons/bs";

const Item = props => {
	return (
		<>
			<li key={props.key} className="list-element">
				{props.todo}
				<button className="close-btn" onClick={props.removeTodo}>
					<BsFillTrashFill />
				</button>
			</li>
		</>
	);
};

Item.propTypes = {
	key: Proptypes.number,
	todo: Proptypes.array,
	removeTodo: Proptypes.func
};

export default Item;
