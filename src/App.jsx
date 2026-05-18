import './App.css'
import ToDoList from './features/TodoList/TodoList.jsx';
import TodoForm from './features/Todos/TodoForm.jsx';
import { useState } from 'react';
import Header from './shared/Header.jsx';
import TodosPage from './features/Todos/TodosPage.jsx';

function App() {
  return (  
    <div>
      <Header />
      <TodosPage />
      <h1>My Todos</h1>
      <TodoForm onAddTodo = {addTodo}/>
      <ToDoList onCompleteTodo={ completeTodo } todoList = {todoList} onUpdateTodo={ updateTodo } />
    </div>
    )
}

export default App
