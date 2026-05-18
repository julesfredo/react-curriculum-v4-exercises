import ToDoList from './features/TodoList/TodoList.jsx';
import TodoForm from './features/Todos/TodoForm.jsx';

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
	updatedTodo = todoList.map(todo => {
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
}

export default TodosPage