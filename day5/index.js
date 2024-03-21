import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Routes, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import ShoppingCart from './shoppingCart';
import AjaxDemo from './AjaxDemo';
import AjaxDemo2 from './AjaxDemo2';
import AjaxDemo3 from './AjaxDemo3';
import ProtectedRoute from './ProtectedRoute';
import NotFound from './NotFound';
import Login from './Login';
import SignOut from './SignOut';
import BankApp from './components/BankApp';
import bankStore from './BankStore';
import { Provider } from 'react-redux';






const routing = (

  
    <Router>

      <div style={{textAlign : 'center', backgroundColor: 'aquamarine'}}>

        <h1>React Assignment on Routing and Login using Tokens</h1>
        <Link to="/">Home</Link> |
        <Link to="/Login" >Login</Link> | 
        <Link to="/AjaxDemo3">AjaxDemo3</Link> |
        <Link to="/Signout">Signout</Link>

        <br />
        <br />
        <hr />
        </div>


      <Routes>
      <Route path = "/" element = {<App></App>} />
      <Route path = "/Login" element = {<Login />} />
      
      <Route path="/AjaxDemo3" element={ 
         <ProtectedRoute  returnUrl="/AjaxDemo3">
              <AjaxDemo3 />
         </ProtectedRoute> } />

      <Route path = '/SignOut' element = {<SignOut />}></Route>
      

         <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
)

bankStore.dispatch({type:"CREATE"});  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
