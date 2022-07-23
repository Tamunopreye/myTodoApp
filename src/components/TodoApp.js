import React from "react";
import { useState } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import { v4 as uuidv4 } from "uuid";

function TodoApp() {
	const [todos, setTodos] = useState([
		{
			id: uuidv4(),
			title: "Setup Development environment",
			completed: true,
		},
		{
			id: uuidv4(),
			title: "Develop website and add content",
			completed: false,
		},
		{
			id: uuidv4(),
			title: "Deploy to live server",
			completed: false,
		},
	]);
	// console.log(todos);

	// change the state of checkbox
	const handleChange = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	// delete item
	const deleteItem = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	// add task
	const addTodo = (title) => {
		const newTask = {
			id: uuidv4(),
			title: title,
			completed: false,
		};

		setTodos([...todos, newTask]);
	};

	return (
		<div className="container">
			<Header />
			<AddTodo onAdd={addTodo} />
			<Todos
				todos={todos}
				handleChange={handleChange}
				onDelete={deleteItem}
			/>
		</div>
	);
}

export default TodoApp;
