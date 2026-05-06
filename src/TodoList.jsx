import React from 'react';
import TodoListItem from './TodoListItem.jsx';

function ToDoList({todoList}) {
	return(
		<>
		<ul>
			{todoList.map(todo =>
				<li key={todo.id} >
					<TodoListItem todo = {todo}/>
				</li>)}
		</ul>
		</>
		);
}

export default ToDoList;