import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import React from 'react';
import TodoHeader from './TodoHeader';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';

export const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (title) => {
		let newTodo = {
			id: uuidv4(),
			title,
			completed: false,
		};

		setTodos([...todos, newTodo]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const markComplete = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	};

	const { width, height } = useWindowSize();

	return (
		<div>
			<TodoHeader />

			<AddTodo addTodo={addTodo} />

			<div>
				{todos.length > 0 ? (
					<ul>
						{todos.map((todo) => (
							<TodoItem
								key={todo.id}
								todo={todo}
								markComplete={markComplete}
								deleteTodo={deleteTodo}
							/>
						))}
					</ul>
				) : (
					<div>
						<p>You're all caught up!</p>
						<Confetti width={width} height={height} />
					</div>
				)}
			</div>
		</div>
	);
};
