import './App.css';
import React, { Suspense, useState } from 'react';
import Visitor from './components/visitor';
import User from './components/user';
function App() {
  const [loggedIn,setLoggedIn] = useState(0);
  const SigninHandler = (event) => {
    event.preventDefault();
    setLoggedIn(1);
  }
  const Onsignout = () => {
    setLoggedIn(0);
  }
  if(loggedIn === 0)
  return (<Visitor SigninHandler={SigninHandler}/>);
  else
  return (<User Onsignout={Onsignout}/>);
}

export default App;
