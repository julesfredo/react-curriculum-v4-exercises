import './App.css'
import ToDoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import { useState } from 'react';
import Header from '/src/shared/Header.jsx';
import TodosPage from '/src/features/Todos/TodosPage.jsx';
import Logon  from '/src/features/Logon.jsx';

function App() {
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  return (
    <>  
    <div>
      <div>
        <Header token={token} onSetToken={setToken} onSetEmail={setEmail} />
      </div>

      <div>
        {

          token ? (
           <TodosPage token={token}/>
           ): (
           <Logon  onSetEmail={setEmail} onSetToken={setToken}/>
           )
         }
       </div>
     </div>
     </>
     )
}

export default App