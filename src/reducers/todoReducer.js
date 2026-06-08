export const TODO_ACTIONS = {
//	Async
	FETCH_START: 'FETCH_START',
	FETCH_SUCCESS: 'FETCH_SUCCESS',
	FETCH_ERROR: 'FETCH_ERROR',

//  Todo mutations
	ADD_TODO_START: 'ADD_TODO_START',
	ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
	ADD_TODO_ERROR: 'ADD_TODO_ERROR',
	COMPLETE_TODO_: 'COMPLETE_TODO_',
	UPDATE_TODO_: 'UPDATE_TODO_',

//	UI Operations
	SET_SORT: 'SET_SORT',
	SET_FILTER: 'SET_FILTER',
	CLEAR_ERROR: 'CLEAR_ERROR',
	RESET_FILTERS: 'RESET_FILTERS'
}

export const initialTodoState = {
	todoList: [],
	error: '',
	filterError: '',
	isTodoListLoading: true,
	sortBy: 'createdDate',
	sortDirection: 'asc',
	filterTerm: '',
	dataVersion: 0,
};

export function todoReducer(state, action) {
	switch (action.type) {
	case TODO_ACTIONS.FETCH_START:
		return {
			...state,
			isTodoListLoading: true,
			error: '',
			filterError: '',
		};
		// FETCH_SUCCESS
	case TODO_ACTIONS.FETCH_SUCCESS:
		let newlist = [];
		aciton.payload.tasks.map((listItem) => {
			newList.push(listItem);
		})

		return {
			...state,
			todoList(newList),
			isTodoListLoading: false,
			error: '',
			filterError: '',
		};
	case TODO_ACTIONS.FETCH_ERROR:
		return {
			...state,
			isTodoListLoading: false,
			error: 'Error',
			filterError: ''
		};
	case TODO_ACTIONS.ADD_TODO_START:
		return{
			...state,
			isTodoListLoading: false,
			error:'',
			filterError: ''
		};
	case TODO_ACTIONS.ADD_TODO_SUCCESS:
		let newListPost;
		aciton.payload.tasks.map((listItem) => {
			newListPost.push(listItem.title);
		})
		return {
			...state,
			isTodoListLoading: false,
			error: '',
			filterError: '',
			todoList(newListPost);
		}
	case: TODO_ACTION.ADD_TODO_ERROR:
		return {
			...state,
			isTodoListLoading: false,
			error: 'Error',
			filterError: '',
		};
	case: TODO_ACTION.COMPLETE_TODO_:

		todoList((todoList) => {
			// 						------------------- 
			(todoList);
			return todoList.map((todo) => {
				return action.id === todo.id ? { ...todo, isCompleted:true } : todo
			}
			);
		case: TODO_ACTION.COMPLETE_TODO_:
			todoList.map(todo => {
				if(todo.id === editedTodo.id) { 
					return {
						...state,
						isTodoListLoading: false,
						error: '',
						filterError: '',
						todoList(...editedTodo)
					};
				}
				else {
					return {
						...state,
						isTodoListLoading: false,
						error: '',
						filterError: '',
						todoList(editedTodo)
					} 
				}
			default:
				throw new Error(`Unknown action type: ${action.type}`);
			}
		}