import { useState, useEffect } from 'react';
import TodoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';

function TodosPage({ token }) {
	let [todoList, setTodoList] = useState([])
	let [error, setError] = useState("")
	let [isTodoLoading, setIsTodoLoading] = useState(false)
	let newList = [];

	useEffect(() => {
		const fetchTodo = async () => {
			try{
				setIsTodoLoading(true);
				const response = await fetch('/api/tasks', {
					method: 'GET',
					headers: { 
						'Content-Type': 'application/json',
						'X-CSRF-TOKEN': { token }
					},
					credentials: 'include',
					body: JSON.stringify({ title, isCompleted }),
				});

				const data = await response.json();
				if(response.status === 200) {
					data.tasks.map((listItem) => {
						newList.push(listItem.title);
					})
					return setTodoList(newList);
				} else if(response.status ===401) {
					throw new Error("unauthorized");
				} else {
					throw new Error("generic Error")
				}

			}catch(err){
				setError(err);
			}finally{
				isTodoLoading(false);
			}

		}
	}, { token })

const  addTodo = async (todoTitle) => { 
	let newTodo = {id:Date.now(), title:todoTitle, isCompleted: false};
	try {
		const response = await fetch('/api/tasks', {
			method: 'POST',
			headers: { 
				'Content-Type': 'application/json',
				'X-CSRF-TOKEN': { token }
			},
			credentials: 'include',
			body: JSON.stringify({ title, isCompleted }),
		});

		const data = await response.json();

		if (response.status === 200) {
			data.tasks.map((listItem) => {
				newList.push(listItem.title);
			})
			return setTodoList(newList);
		} else {

		}
	} catch(err){
		throw new Error("Error: " , err)
	} finally{}
}
const completeTodo= async(id) => {
	let originalList = todoList;
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
return(
	<div>
      {/*<h1>My Todos</h1>*/}
		<TodoForm onAddTodo = {addTodo} />
		<TodoList onCompleteTodo={ completeTodo } todoList = {todoList} onUpdateTodo={ updateTodo } />
	</div>

	)
}

export default TodosPage