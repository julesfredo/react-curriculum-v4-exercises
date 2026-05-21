import './App.css'
import ToDoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import { useState } from 'react';
import Header from '/src/shared/Header.jsx';
import TodosPage from '/src/features/Todos/TodosPage.jsx';
import Logon  from '/src/features/Logon.jsx';

function App(addTodo, onCompleteTodo, todoList, updateTodo) {
  return (  
    <div>
      <Header />
      <TodosPage />
      <Logon  />
      {/*<h1>My Todos</h1>*/}
      {/*<TodoForm onAddTodo = {addTodo}/>*/}
      {/*<ToDoList onCompleteTodo={ completeTodo } todoList = {todoList} onUpdateTodo={ updateTodo } />*/}
    </div>
    )
}

export default App
