import './App.css'
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  function addTodo(todoTitle) {
    
    let newTodo = {id:Date.now(), title:todoTitle, isCompleted: false};

    setTodoList((previous) =>
      [newTodo, ...previous]
      );
    
  }
  function completeTodo(id) {
    todoList.map((todo) => {
      if(id == todo.id) {
        return {...todo, isCompleted: true};
      }
    })
      return todo;
      setTodoList();
  }
  return (  
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo = {addTodo}/>
      <ToDoList onCompleteTodo={ completeTodo } todoList = {todoList} />
    </div>
    )
}

export default App
