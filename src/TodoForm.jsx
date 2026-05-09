import { useRef } from 'react';
import { useState } from 'react';

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
			<label htmlFor="todoTitle">Todo</label>
			<input 
				value={workingTodoTitle}
				type="text"
				id="todoTitle"
				name="todoTitle"
				placeholder= { 'Todo text' }
				onChange = { e => setWorkingTodoTitle(e.target.value) }
				required
			/>
			<button type="submit"
			 disabled={!workingTodoTitle}
			>Add Todo </button>
		</form>
	);
}
export default TodoForm;

