import React from 'react';
import SignupC from './Signup/Components/SignupC';
import Aux from './Hoc/Auxialary';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import UserLoginComponent from './User/UserLogin/Components/UserLoginComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Navbar from './Shop/Components/Navbar';
import Home from "./Shop/Page/Home";
import AdminComponent from './Admin/Components/AdminComponent';


const App = () =>  {
  return (
    <Aux>
      
      <BrowserRouter>
         <Navbar />
          <Switch>
            <Route path='/' exact>
              <SignupC />
          
            </Route>

            <Route path='/Userlogin' exact>
              <UserLoginComponent />
            </Route>
              
            <Route path='/Home' exact component={Home}>
             
            </Route>
            
              
            <Route path='/AddProduct' exact>
            <AdminComponent />
            </Route>

            
          </Switch>
      </BrowserRouter>
 
    </Aux>
  );
}

export default App;
