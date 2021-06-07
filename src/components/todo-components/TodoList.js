import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import React from 'react';
import TodoHeader from './TodoHeader';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import Confetti from 'react-confetti';
import { useWindowSize } from '@react-hook/window-size';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Fragment } from 'react';
import { Checkbox, IconButton } from '@material-ui/core';
import { Label } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';

// export const TodoList = () => {
// 	const [todos, setTodos] = useState([]);

// 	const addTodo = (title) => {
// 		let newTodo = {
// 			id: uuidv4(),
// 			title,
// 			completed: false,
// 		};

// 		setTodos([...todos, newTodo]);
// 	};

// 	const deleteTodo = (id) => {
// 		setTodos(todos.filter((todo) => todo.id !== id));
// 	};

// 	const markComplete = (id) => {
// 		setTodos(
// 			todos.map((todo) =>
// 				todo.id === id ? { ...todo, completed: !todo.completed } : todo
// 			)
// 		);
// 	};

// 	const { width, height } = useWindowSize();

// 	return (
// 		<div>
// 			<TodoHeader />

// 			<AddTodo addTodo={addTodo} />

// 			<div>
// 				{todos.length > 0 ? (
// 					<ul>
// 						{todos.map((todo) => (
// 							<TodoItem
// 								key={todo.id}
// 								todo={todo}
// 								markComplete={markComplete}
// 								deleteTodo={deleteTodo}
// 							/>
// 						))}
// 					</ul>
// 				) : (
// 					<div>
// 						<p>You're all caught up!</p>
// 						<Confetti width={width} height={height} />
// 					</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export const TodoList = () => {
	const [todos, setTodos] = useState([]);

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

	const classes = useStyles();

	const addTodo = (title, priority) => {
		let newTodo = { title, priority, id: uuidv4(), completed: false };

		setTodos([...todos, newTodo]);
	};

	return (
		<Fragment>
			<TodoHeader />
			<AddTodo addTodo={addTodo} />
			<label>
				{todos.filter((todo) => todo.completed == false).length} todo items
				left!
			</label>
			<TableContainer component={Paper}>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Todo Item(s)</StyledTableCell>
							<StyledTableCell align='center'>Priority</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{todos.map((row) => (
							<StyledTableRow key={row.id}>
								<StyledTableCell component='th' scope='row'>
									<Checkbox
										onChange={() => markComplete(row.id)}
										checked={row.completed}
									></Checkbox>
									{row.title}
								</StyledTableCell>
								<StyledTableCell align='center'>
									{row.priority}{' '}
									<IconButton onClick={() => deleteTodo(row.id)}>
										<DeleteIcon />
									</IconButton>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<div>
				{todos.filter((todo) => todo.completed == false).length === 0 ? (
					<Confetti />
				) : null}
			</div>
		</Fragment>
	);
};
