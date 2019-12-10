import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';
import './design.css'
import Header from './Components/Header'
import Signup from './Components/Signup';
import Login from './Components/Login'

const App = () => {
  return (
   <div>
      <Header />
      <BrowserRouter>
        <Switch>
           <Route path='/' component  ={Signup} exact/>
           <Route path='/Login' component  ={Login}/>
        </Switch>
     </BrowserRouter>
   </div>
  );
}

export default App;
