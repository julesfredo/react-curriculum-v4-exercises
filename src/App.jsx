import './App.css';
import ToDoList from './ToDoList.jsx';
import ToDoForm from './ToDoForm.jsx';

function App() {
  return (  
    <div>
      <h1>Todo List</h1>
      <ToDoForm />
      <ToDoList />
    </div>
    );
}

export default App
