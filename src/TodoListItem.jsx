import React from 'react';

export default function TodoListItem({todo,onCompleteTodo}) {

	return (
		
		<li>{ todo.title }</li>
		);
};