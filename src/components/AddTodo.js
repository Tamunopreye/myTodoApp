import React from "react";
import { useState } from "react";

const AddTodo = ({ onAdd }) => {
	const [title, setTitle] = useState("");

	const onChange = (e) => {
		setTitle(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (!title) {
			alert("Please add a task.");
			return;
		}

		onAdd(title);
		setTitle("");
	};

	return (
		<form className="form-container" onSubmit={onSubmit}>
			<input
				type="text"
				placeholder="Add Todo..."
				className="input-text"
				name="title"
				value={title}
				onChange={onChange}
			/>
			<input type="submit" value="Submit" className="input-submit" />
		</form>
	);
};

export default AddTodo;
