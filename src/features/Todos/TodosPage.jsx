import {useState} from 'react';
import TodoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';

function TodosPage() {
	let [todoList, setTodoList] = useState([])
	function addTodo(todoTitle) {

		let newTodo = {id:Date.now(), title:todoTitle, isCompleted: false};

		return setTodoList((previous) =>
			[newTodo, ...previous]
			);    
	}
	function completeTodo(id) {
		console.log(todoList);
		setTodoList((todoList) => {
			console.log(todoList);
			return todoList.map((todo) => {
				return id === todo.id ? { ...todo, isCompleted:true } : todo
			}
			);
		}
		)
	}
	function updateTodo(editedTodo) {
		let updatedTodo;
		updatedTodo = todoList.map(todo => {freecanwifi50

			if(todo.id ===  editedTodo.id) {
				console.log("id's match");
				return {...editedTodo};
			}
			else {
				return todoList;
			}
			setTodoList(updatedTodos);
		})
		return updatedTodo;
	}
	return(
		<div>
      {/*<h1>My Todos</h1>*/}
			<TodoForm onAddTodo = {addTodo} />
			<TodoList onCompleteTodo={ completeTodo } todoList = {todoList} onUpdateTodo={ updateTodo } />
		</div>

		)
}

export default TodosPage