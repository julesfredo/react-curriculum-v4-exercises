import './App.css'
import ToDoList from './TodoList.jsx';
import TodoForm from './TodoForm.jsx';
import { useState } from 'react';

const todos = [
    {id: 1, title: "review resources"},
    {id: 2, title: "take notes"},
    {id: 3, title: "code out app"},
]

function App() {
const [todoList, setTodoList] = useState([])

function addTodo(todoTitle) {
  // let id = Date.now();
  // let title = todoTitle;
  let newTodo = {id:Date.now(), title:todoTitle};

  setTodoList((previous) =>
    [newTodo, ...previous]
    )
  
}

  return (  
    <div>
      <h1>My Todos</h1>
      <TodoForm onAddTodo = {addTodo}/>
      {/*<ToDoList todoList = {todoList} />*/}
      <ul>
        {todoList.map(todo => <li key={todo.id}>{todo.title}</li>)}
      </ul>
    </div>
  )
}

export default App
