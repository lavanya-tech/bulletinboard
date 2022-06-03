import { Route, Routes } from 'react-router-dom';
// import Signin from './pages/signin.js';
// import Signup from './pages/signup.js';
import { Navigate } from 'react-router-dom';
import React, { Suspense } from 'react';
import Todaysposts from '../pages/todaysposts';
import Navigation from './navigation';
import Loading from './loading';
import Home from '../pages/home';
import { Container } from 'react-bootstrap';
const Signin = React.lazy(()=>import('../pages/signin'));
const Signup = React.lazy(()=>import('../pages/signup'));

const Visitor = (props) => {
  return (
    <div>
      <Navigation></Navigation>
      <Suspense fallback={<Loading></Loading>}>
      <Routes>
        <Route exact path='/' element={<Navigate replace to='/home' />}></Route>
        <Route exact path='/home' element={<Home></Home>}></Route>
        <Route exact path='/signin' element={<Signin SigninHandler={props.SigninHandler}></Signin>}></Route>
        <Route exact path='/signup' element={<Signup></Signup>}></Route>
        <Route exact path='/todaysposts' element={<Todaysposts></Todaysposts>}></Route>
      </Routes></Suspense>
    </div>
  );
}

export default Visitor;