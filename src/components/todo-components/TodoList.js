import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';
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
import { forwardRef } from 'react';

import MaterialTable from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

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

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

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
	const [todos, setTodos] = useState([
		{ title: 'Test', priority: 2, id: uuidv4(), completed: false },
		{ title: 'Test2', priority: 7, id: uuidv4(), completed: false },
	]);

	const [todosLeft, setTodosLeft] = useState(
		todos.filter((todo) => todo.completed == false).length
	);

	useEffect(() => {
		setTodosLeft(todos.filter((todo) => todo.completed == false).length);
	}, [todos]);

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
			<label>{todosLeft} todo items left!</label>
			<MaterialTable
				icons={tableIcons}
				title='Pokemon Tasks'
				columns={[
					{ title: 'Task', field: 'title' },
					{ title: 'Priority', field: 'priority', type: 'numeric' },
				]}
				data={todos.map((o) => ({ ...o }))}
				options={{
					selection: true,
				}}
				actions={[
					{
						icon: tableIcons.Delete,
						tooltip: 'Delete Task',
						onClick: (event, data) => {
							data.map((row) => {
								deleteTodo(row.id);
								console.log(`Deleted  ${row.title}`);
							});
						},
					},
				]}
			/>
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
