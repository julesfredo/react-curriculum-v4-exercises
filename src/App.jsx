import './App.css'
import ToDoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import { useState } from 'react';
import Header from '/src/shared/Header.jsx';
import TodosPage from '/src/features/Todos/TodosPage.jsx';
import Logon  from '/src/features/Logon.jsx';

function App(addTodo, onCompleteTodo, todoList, updateTodo) {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  return (
    <>  
    <div>
      <Header token={token} onSetToken={setToken} onSetEmail={setEmail} />
      {

        token ? (
         <TodosPage token={token}/>
         ): (
         <Logon  onSetEmail={setEmail} onSetToken={setToken}/>
         )
      }
      {/*<h1>My Todos</h1>*/}
      {/*<TodoForm onAddTodo = {addTodo}/>*/}
      {/*<ToDoList onCompleteTodo={ completeTodo } todoList = {todoList} onUpdateTodo={ updateTodo } />*/}
   </div>
   </>
   )
}

export default App
