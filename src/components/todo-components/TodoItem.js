
import PropTypes from "prop-types";
import DeleteIcon from '@material-ui/icons/Delete';
function TodoItem(props) {
  let textDecorationClass = props.todo.completed
    ? "line-through"
    : "no-underline";
  let textColorClass = props.todo.completed
    ? "text-pink-600"
    : "text-gray-800";

  return (
    <li
      className={`${textDecorationClass} ${textColorClass}`}
      data-testid="todo-item"
    >
      <input
        name="completed-checkbox"
        type="checkbox"
        checked={props.todo.completed}
        value={props.todo.completed}
        onChange={() => props.markComplete(props.todo.id)}
      />
      <span>
        {props.todo.title}
      </span>
      <button
        onClick={() => props.deleteTodo(props.todo.id)}
      >
          <DeleteIcon />
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;