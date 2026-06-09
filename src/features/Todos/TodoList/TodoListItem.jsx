import React, { useState, useRef } from 'react';
import TextInputWithLabel from '/src/shared/TextInputWithLabel.jsx';
import { isValidTodoTitle } from '/src/utils/todoValidation.js';

export default function TodoListItem({todo, onCompleteTodo, onUpdateTodo}) {
	const [isEditing, setIsEditing] = useState(false);
	const [workingTitle, setWorkingTitle] = useState(todo.title);
	const inputref= useRef(null);
	let updatedTitle;

	function handleCancel() {
		setWorkingTitle(todo.title);
		setIsEditing(false);
	}
	function handleEdit(event) {
		setWorkingTitle(event.target.value);
		console.log(workingTitle);
	}
	function handleUpdate(e) {
		e.preventDefault();
		if(!isEditing) return;
		updatedTitle = onUpdateTodo({...todo, title : workingTitle}).title;
		console.log(workingTitle);
		setIsEditing(false);
	}
	
	return (
		<li>
			<form onSubmit = { handleUpdate }>
			 	{ isEditing ? ( 
					<TextInputWithLabel inputref= {inputref} onChange={handleEdit} value= { workingTitle } elementId={todo.id} labelText="Todo"/>

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

								onClick={() => setIsEditing(true)}> { workingTitle }
							</span>


							</>
						)}
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
					</form>
				</li>

				)
};