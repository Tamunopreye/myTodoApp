import React from "react";
import { useState, useEffect } from "react";
import Header from "./layout/Header";
import Todos from "./Todos";
import AddTodo from "./AddTodo";
import axios from "axios";

function TodoApp() {
	// const API = "https://jsonplaceholder.typicode.com/todos?_limit=10";
	const [todos, setTodos] = useState([]);
	// const [show, setShow] = useState(false);

	// fetch data from rest API
	useEffect(() => {
		axios
			.get("http://localhost:5000/todos")
			.then((res) => setTodos(res.data));
	}, []);

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
		axios
			.delete(`http://localhost:5000/todos/${id}`)
			.then((res) => setTodos(todos.filter((todo) => todo.id !== id)));
	};
	// add task
	const addTodo = (title) => {
		axios
			.post("http://localhost:5000/todos", {
				title: title,
				completed: false,
			})
			.then((res) => setTodos([...todos, res.data]));
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
