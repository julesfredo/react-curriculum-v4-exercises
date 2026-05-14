import React, { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel.jsx';
import { isValidTodoTitle } from '../../utils/TodoValidation.js';

export default function TodoListItem({todo, onCompleteTodo, onUpdateTodo={ onUpdateTodo }}) {
	const [isEditing, setIsEditing] = useState(false);
	const [workingTitle, setWorkingTitle] = useState(todo.title);
	function handleCancel() {
		setWorkingTitle(todo.title);
		setIsEditing(false);
	}
	function handleEdit(event) {
		setWorkingTitle(event.target.value);
	}
	function handleUpdate(event) {
		event.preventDefault();
		if(!isEditing) return;
		onUpdateTodo({...todo, title : workingTitle});
		setIsEditing(false);
	}
	return (
		<li>
			<form onSubmit = { handleUpdate }>
			 	{ isEditing ? ( 
					<TextInputWithLabel onChange={handleEdit} value= { workingTitle } />
				) : (

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
							<br/>
							<button

								type="button"
								onClick={handleCancel}
							>
								Cancel
							</button>

							<button
								type="button"
								onClick={ handleUpdate }
								disabled={!isValidTodoTitle(todo.title)}>
								Update
							</button>

							</>
						)}
					</form>
				</li>

				)
};