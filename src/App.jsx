import './App.css'
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  function addTodo(todoTitle) {
    
    let newTodo = {id:Date.now(), title:todoTitle};

    setTodoList((previous) =>
      [newTodo, ...previous]
      );
    
  }

  return (  
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo = {addTodo}/>
      <ToDoList todoList = {todoList} />
    </div>
    )
}

export default App
