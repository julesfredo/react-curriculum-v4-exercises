import { useState, useEffect, useReducer } from 'react';
import TodoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import SortBy from '/src/shared/SortBy.jsx';
import {
  todoReducer,
  initialTodoState,
  TODO_ACTIONS
} from '/src/reducers/todoReducer.js';

function TodosPage({ token }) { 
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
				const response = await fetch(`/api/tasks?${params.toString()}`, {
					method: 'GET',
					headers: { 
						'Content-Type': 'application/json',
						'X-CSRF-TOKEN': token.toString()
					},
					credentials: 'include'
				});

				const data = await response.json();
				dispatch({ 
					type: TODO_ACTIONS.FETCH_SUCCESS,
					payload: data
				});

			}catch(err) {
				dispatch({
					type: TODO_ACTIONS.FETCH_ERROR,
					payload: err
				})

			}finally{
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
			dispatch({ 
				type: TODO_ACTIONS.ADD_TODO_SUCCESS, 
				payload: data
			})

		} catch(err){
			dispatch({ type: TODO_ACTIONS.ADD_TODO_ERROR })
			throw new Error("Error: " , TODO_ACTIONS.ADD_TODO_ERROR)
		} finally{}
	}
	const completeTodo= async(id) => {
		dispatch({ type: TODO_ACTION.COMPLETE_TODO, payload: id })
	}
	function updateTodo(editedTodo) {
		dispatch({ 
			type: TODO_ACTIONS.UPDATE_TODO_,
			payload: editedTodo 
		});
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