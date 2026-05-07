import React from 'react';
import TodoListItem from './TodoListItem.jsx';

// let filteredTodoList=[];

function ToDoList({todoList=[], onCompleteTodo}) {
	let filteredTodoList = todoList.filter(todo => !todo.isCompleted);
	console.log(filteredTodoList);
	
	return(
		filteredTodoList.length === 0 ? (<p>Add todo above to get started</p>) :
		(<ul>
			{filteredTodoList.map(todo =>
				<TodoListItem onCompleteTodo={ onCompleteTodo } key={todo.id} todo = {todo}/>
				)}
		</ul>)
		);
}

export default ToDoList;