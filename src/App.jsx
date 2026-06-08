import './App.css'
import ToDoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import { useState } from 'react';
import Header from '/src/shared/Header.jsx';
import TodosPage from '/src/features/Todos/TodosPage.jsx';
import Logon  from '/src/features/Logon.jsx';
import { useAuth } from '/src/contexts/AuthContext.jsx';

function App() {
  const { token, isAuthenticated, login, logout, email } = useAuth();

  return (
    <>  
    <div>
      <div>
        <Header />
      </div>

      <div>
        {

          token ? (
           <TodosPage />
           ): (
           <Logon />
           )
         }
       </div>
     </div>
     </>
     )
}

export default App