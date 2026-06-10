import './App.css'
import ToDoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import { useState } from 'react';
import Header from '/src/shared/Header.jsx';
import TodosPage from '/src/pages/TodosPage.jsx';
import './App.css';
import { Routes, Route } from 'react-router';
import Logon  from '/src/features/Logon.jsx';
import { useAuth } from '/src/contexts/AuthContext.jsx';
import Header from './shared/Header';

function App() {
  const { token, isAuthenticated, login, logout, email } = useAuth();
  function App() {
    return (
      <>
      <Header />
      <Routes>
       <TodosPage />
       <Logon />
     </Routes>
     </>
    )
  }

  export default App