import { useRef } from 'react';
import { useState } from 'react';
import TextInputWithLabel from '../shared/TextInputWithLabel.jsx';
import { isValidTodoTitle } from '../utils/TodoValidation.js'
function TodoForm ({ onAddTodo }) {
	const [workingTodoTitle, setWorkingTodoTitle] = useState("");
	const inputRef= useRef(null);
  const handleAddTodo = (event) => {
    event.preventDefault();

console.log(workingTodoTitle);
   let workingTodoTitleNoSpace = workingTodoTitle.trim();
    console.log(workingTodoTitleNoSpace);
    if (workingTodoTitleNoSpace) {
      onAddTodo(workingTodoTitleNoSpace);
      setWorkingTodoTitle("")
    }
  };

	return(
		<form onSubmit={handleAddTodo}>
			<TextInputWithLabel
				ref={inputRef}
				value={workingTodoTitle}
				onChange = { e => setWorkingTodoTitle(e.target.value) }
				elementId = "todoTitle"
				labelText = "todo"
			/>
			<button type="submit"
			 disabled={!isValidTodoTitle(workingTodoTitle)}
			>Add Todo </button>
		</form>
	);
}
export default TodoForm;

