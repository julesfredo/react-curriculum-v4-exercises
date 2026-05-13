import React from 'react';
import TodoListItem from './TodoListItem.jsx';
import { useState } from 'react';

let filteredTodoList=[];
function ToDoList({todoList, onCompleteTodo = {completeTodo}}) {
	console.log(todoList);
	for(let z=0; z< todoList.length; z++) {
	filteredTodoList = todoList.filter(todo => todo);
	console.log(filteredTodoList);
	}
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