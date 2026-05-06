import React from 'react';
import TodoListItem from './TodoListItem.jsx';

function ToDoList({todoList}) {

	todoList = [
		{id: 1, title: "review resources"},
		{id: 2, title: "take notes"},
		{id: 3, title: "code out app"},
	]

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