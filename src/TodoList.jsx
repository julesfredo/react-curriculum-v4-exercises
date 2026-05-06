import React from 'react';
import TodoListItem from './TodoListItem.jsx';

function ToDoList({todoList}) {
	return(
		todoList.length === 0 ? (<p>Add todo above to get started</p>) :
		(<ul>
			{todoList.map(todo =>
				<TodoListItem key={todo.id} todo = {todo}/>
				)}
		</ul>)
		)
}

export default ToDoList;