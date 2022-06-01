import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home.js';
// import Signin from './pages/signin.js';
// import Signup from './pages/signup.js';
import React, { Suspense } from 'react';
import Todaysposts from './pages/todaysposts';
import Navigation from './components/navigation';

const Signin = React.lazy(()=>import('./pages/signin'));
const Signup = React.lazy(()=>import('./pages/signup'));

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Suspense>
      <Routes>
        <Route exact path='/' element={<Home></Home>}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='/signin' element={<Signin></Signin>}></Route>
        <Route exact path='/signup' element={<Signup></Signup>}></Route>
        <Route exact path='/todaysposts' element={<Todaysposts></Todaysposts>}></Route>
      </Routes></Suspense>
    </div>
  );
}

export default App;
