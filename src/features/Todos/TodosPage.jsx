import { useState, useEffect, useReducer } from 'react';
import TodoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import SortBy from '/src/shared/SortBy.jsx';

function TodosPage({ token }) {
	// let [todoList, setTodoList] = useState([])
	// let [error, setError] = useState("")
	// let [isTodoLoading, setIsTodoLoading] = useState(false)
	// let [sortBy, setSortBy] = useState('creationDate');
	// let [sortDirection, setSortDirection] = useState('desc');
	// let newList = [];

	const [state, dispatch] = useReducer(todoReducer, initialTodoState);
	const {
		todoList,
		error,
		filterError,
		isTodoListLoading,
		sortBy,
		sortDirection,
		filterTerm,
		dataVersion,
	} = state;
	const params = new URLSearchParams({
		sortBy,
		sortDirection,
	});

	useEffect(() => {
		const fetchTodo = async () => {
			try{
				//setIsTodoLoading(true);
				const response = await fetch(`/api/tasks?${params.toString()}`, {
					method: 'GET',
					headers: { 
						'Content-Type': 'application/json',
						'X-CSRF-TOKEN': token.toString()
					},
					credentials: 'include',
					//body: JSON.stringify({ title, isCompleted }),
				});

				const data = await response.json();
				if(response.status === response.ok) {
					data.tasks.map((listItem) => {
						newList.push(listItem);
					})
					return setTodoList(newList);
				} else if(response.status === 401) {
					throw new Error("unauthorized");
				} else {
					throw new Error("generic Error")
				}

			}catch(err){
				setError(err);
			}finally{
				setIsTodoLoading(false);
			}

		}
		fetchTodo();
	}, [token, sortBy, sortDirection]);

	const  addTodo = async (todoTitle) => { 
		let newTodo = {id:Date.now(), title: todoTitle, isCompleted: false};
		try {
			const response = await fetch('/api/tasks', {
				method: 'POST',
				headers: { 
					'Content-Type': 'application/json',
					'X-CSRF-TOKEN': token
				},
				credentials: 'include',
				body: JSON.stringify({ todoTitle, isCompleted }),
			});

			const data = await response.json();

			if (response.status === response.ok) {
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
			(todoList);
			return todoList.map((todo) => {
				return id === todo.id ? { ...todo, isCompleted:true } : todo
			}
			);
		}
		)
	}
//Segund
	function updateTodo(editedTodo) {
		let updatedTodo;
		updatedTodo = todoList.map(todo => {
			if(todo.id === editedTodo.id) { 
				return {...editedTodo};
			}
			else {
				return editedTodo;
			}
			setTodoList(updatedTodo);
		})
		return updatedTodo;
	}

	return(
		<div>
			<SortBy />
			<TodoForm onAddTodo = {addTodo} />
			<TodoList onCompleteTodo={ completeTodo } todoList = {todoList} onUpdateTodo={ updateTodo } />
		</div>

		)
}

export default TodosPage