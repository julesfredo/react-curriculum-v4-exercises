import './App.css'
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([])

  function addTodo(todoTitle) {

    let newTodo = {id:Date.now(), title:todoTitle, isCompleted: false};

    console.log(newTodo);
    setTodoList((previous) =>
      [newTodo, ...previous]
      );
      // console.log(previous);
    
  }
  function completeTodo(id) {
    setTodoList((previous) => {
      return previous.map((todo) => {
        id === todo.id ? { ...todo, isCompleted : true}: todo;
      }
      );
    }
    )
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
