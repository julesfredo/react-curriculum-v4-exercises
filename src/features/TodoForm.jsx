import { useRef } from 'react';
import { useState } from 'react';
import { TextInputWithLabel } from 'src/shared/TextInputWithLabel.jsx';

function TodoForm ({ onAddTodo }) {
	const [workingTodoTitle, setWorkingTodoTitle] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();

console.log(workingTodoTitle);
    // .trim prevents whitespace only todos
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
				ref={ref}
				value={workingTodoTitle}
				onChange = { e => setWorkingTodoTitle(e.target.value) }
				elementId = { todoTitle }
				labelText = "todo"
			/>
			{/*<label htmlFor="todoTitle">Todo</label>*/}
			{/*<input 
				type="text"
				id="todoTitle"
				name="todoTitle"
				placeholder= { 'Todo text' }
				required
			/>*/}
			<button type="submit"
			 disabled={!workingTodoTitle}
			>Add Todo </button>
		</form>
	);
}
export default TodoForm;

