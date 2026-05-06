import { useRef } from 'react';

function TodoForm ({ onAddTodo }) {
	const inputRef = useRef(null);

  const handleAddTodo = (event) => {
    event.preventDefault();

    // Explore the event object (we'll remove this later)
    console.log('Event object:', event);
    console.log('Event target:', event.target);
    // console.log('Input value:', event.target.todoTitle.value);

    // .trim prevents whitespace only todos
    const todoTitle = inputRef.current.value.trim();
    console.log(todoTitle);
    if (todoTitle) {
      onAddTodo(todoTitle);
      inputRef.current.value ="";
      inputRef.current.focus();
    }
  };

	return(
		<form onSubmit={handleAddTodo}>
			<label htmlFor="todoTitle">Todo</label>
			<input 
				ref={inputRef}
				type="text"
				id="todoTitle"
				name="todoTitle"
				placeholder= { 'Todo text' }
				required
			/>
			<button type="submit"
			 // onClick={handleAddTodo}
			>Add Todo </button>
		</form>
	);
}
export default TodoForm;

