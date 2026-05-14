import React from 'react';
import TodoListItem from './TodoListItem.jsx';
import { useState } from 'react';

let filteredTodoList=[];
function ToDoList({todoList, onCompleteTodo = {completeTodo}, onUpdateTodo={ onUpdateTodo }}) {
	todoList.map((todo)=>{
		todo;
	})
	return(
		todoList.length === 0 ? (<p>Add todo above to get started</p>) :
		(<ul>
			{todoList.map(todo =>
				<TodoListItem onCompleteTodo={ onCompleteTodo } key={todo.id} todo = {todo} onUpdateTodo={ onUpdateTodo }/>
				)}
		</ul>)
		);
}

export default ToDoList;