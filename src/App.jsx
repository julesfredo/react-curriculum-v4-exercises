import './App.css'
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

function App() {
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
        id == todo.id ? {...todo, isCompleted:true} : todo
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
