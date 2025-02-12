import './App.css';
import React from 'react';
import {HomePage} from './pages/HomePage/HomePage.tsx';
import {AppHeader} from './components/AppHeader/AppHeader.tsx';
import { Route, Routes } from 'react-router-dom';
import { ToDoList } from './pages/ToDoList/ToDoList.tsx';


function App() {
  return (
    <div>
    <AppHeader />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ToDoList' element={<ToDoList/>} />

    </Routes>

    </div>
  );
}

export default App;
