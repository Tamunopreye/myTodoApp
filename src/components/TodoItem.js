import React from "react";
import { FaTimes } from "react-icons/fa";
const TodoItem = ({ todo, handleChange, onDelete }) => {
	const completedStyle = {
		fontStyle: "italic",
		color: "#c5e2d2",
		textDecoration: "line-through",
	};

	return (
		<>
			<li className="todo-item">
				<input
					type="checkbox"
					checked={todo.completed}
					onChange={() => handleChange(todo.id)}
				/>
				<FaTimes
					style={{ color: "red", float: "right" }}
					onClick={() => onDelete(todo.id)}
				/>
				<span style={todo.completed ? completedStyle : null}>
					{todo.title}
				</span>
			</li>
		</>
	);
};

export default TodoItem;
