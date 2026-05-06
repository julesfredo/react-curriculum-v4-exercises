import React from 'react';
import TodoListItem from './TodoListItem.jsx';

function ToDoList({todoList, onCompleteTodo}) {
	return(
		todoList.length === 0 ? (<p>Add todo above to get started</p>) :
		(<ul>
			{todoList.map(todo =>
				<TodoListItem onCompleteTodo key={todo.id} todo = {todo}/>
				)}
		</ul>)
		)
}

export default ToDoList;