import React, { useState } from 'react';
import TextInputWithLabel from '../../shared/TextInputWithLabel.jsx';

export default function TodoListItem({todo, onCompleteTodo}) {
	const [isEditing, setIsEditing] = useState(false);
	const [workingTitle, setWorkingTitle] = useState(todo.title);
	function handleCancel() {
		setWorkingTitle(todo.title);
		setIsEditing(false);
	}
	return (
		<li>
			<form>
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
							onClick={handleCancel()}
						>
							Cancel
						</button>
							</>
							)}
					</form>
				</li>

				)
};