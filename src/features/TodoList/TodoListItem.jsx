import React, { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel.jsx';
import { isValidTodoTitle } from '../../utils/TodoValidation.js';

export default function TodoListItem({todo, onCompleteTodo, onUpdateTodo={ updateTodo }}) {
	const [isEditing, setIsEditing] = useState(false);
	const [workingTitle, setWorkingTitle] = useState(todo.title);
	function handleCancel() {
		setWorkingTitle(todo.title);
		setIsEditing(false);
	}
	function handleUpdate(event) {
		if(!isEditing) return;
		event.preventDefault();

		let workingTodo = {...todo, title : workingTitle};
		onUpdateTodo();
		setIsEditing(false);
	}
	return (
		<li>
			<form
				onSubmit = { habdleUpdate }>
				{ isEditing ? ( 
					<TextInputWithLabel
						value= { workingTitle }
						/>): (
						<>
						<label> 
							<input
								type="checkbox"
								checked={todo.isCompleted}
								onChange={() => onCompleteTodo(todo.id)}
							/>
						</label>
						<span
							onClick={() => setIsEditing(true)}> { todo.title }
						</span>
						<button
							type="button"
							onClick={handleCancel}
						>
							Cancel
						</button>
						
						<button
							type="button"
							onClick={ handleUpdate }
							disabled={!isValidTodoTitle(workingTodoTitle)}>
							Update
						</button>

						</>
						)}
					</form>
				</li>

				)
};