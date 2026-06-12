import './App.css'
import AboutPage from './pages/AboutPage.jsx';
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

import RequireAuth from './components/RequireAuth';

import ToDoList from '/src/features/Todos/TodoList/TodoList.jsx';
import TodoForm from '/src/features/TodoForm.jsx';
import { useState } from 'react';
import Header from '/src/shared/Header.jsx';
import TodosPage from '/src/pages/TodosPage.jsx';
import './App.css';
import { Routes, Route } from 'react-router';
import Logon  from '/src/features/Logon.jsx';
import { useAuth } from '/src/contexts/AuthContext.jsx';

function App() {
//  const { token, isAuthenticated, login, logout, email } = useAuth();
    return (
      <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path='/todos'
         element={
          <RequireAuth>
            <TodosPage />
          </RequireAuth>
        }
      />
      <Route
        path='/profile'
        element={
          <RequireAuth>
            <ProfilePage />
          </RequireAuth>
        }
      />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
    </>
    );
  }

  export default App;