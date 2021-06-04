import { useState } from 'react';
import PropTypes from 'prop-types';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { IconButton } from '@material-ui/core';

function AddTodo(props) {
	const [title, setTitle] = useState('');

	const onSubmit = (evt) => {
		// Stop form being submmited to same file and reloading the page
		evt.preventDefault();

		if (!title) {
			alert('Please add a Pokemon task.');
			return;
		}

		props.addTodo(title);

		setTitle('');
	};

	return (
		<div className='mx-4 mt-6'>
			<form
				onSubmit={onSubmit}
				className='flex items-center transition duration-500 ease-in-out py-2 border-b-2 border-gray-300 focus-within:border-b-2 focus-within:border-pink-600'
			>
				<input
					name='task-title'
					type='text'
					placeholder='Add a Pokemon task...'
					value={title}
					onChange={(evt) => setTitle(evt.target.value)}
					data-testid='task-input-field'
				/>
				<IconButton     type="submit"
          className="transition duration-200 ease-in-out text-gray-400 focus:outline-none hover:text-pink-500 text-lg px-2 cursor-pointer">
					<AddCircleIcon />
				</IconButton>
			</form>
		</div>
	);
}

AddTodo.propTypes = {
	addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
