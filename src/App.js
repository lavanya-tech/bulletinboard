import './App.css';
import React, { Suspense, useEffect, useState } from 'react';
import Visitor from './components/visitor';
import User from './components/user';
function App() {
  const [loggedIn,setLoggedIn] = useState(0);
  const SigninHandler = (event) => {
    event.preventDefault();
    localStorage.setItem('logged','1');
    setLoggedIn(1);
    
  } 
  const Onsignout = () => {
    localStorage.setItem('logged','0');
    setLoggedIn(0);
  }
  useEffect(()=>{
    if (localStorage.getItem("logged") === "1") {
      setLoggedIn(1);
    } 
  });
  
  if(loggedIn === 0)
  return (<Visitor SigninHandler={SigninHandler}/>);
  else
  return (<User Onsignout={Onsignout}/>);
}

export default App;
