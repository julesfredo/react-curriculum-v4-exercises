import React from 'react';
import TodoListItem from './TodoListItem.jsx';

function ToDoList({todoList}) {
	return(
		todoList.length() === 0 ? (<p>Add todo above to get started</p>) :
		(<ul>
			{todoList.map(todo =>
				<li key={todo.id} >
					<TodoListItem todo = {todo}/>
				</li>)}
		</ul>)
		)
}

export default ToDoList;