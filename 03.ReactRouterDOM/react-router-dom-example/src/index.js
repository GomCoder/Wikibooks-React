import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, 
        Switch,
        Link,
        Route} from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topics(){
  return(
    <div>
      <h2>Topics</h2>
      Topics...
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>Contact</h2>
      Contact...
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>Hello React Router DOM example</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Switch>
        <Route exact path="/"><Home></Home></Route>        
        <Route path="/topics"><Topics></Topics></Route>
        <Route path="/contact"><Contact></Contact></Route>
        <Route path="/">Not found</Route>      
      </Switch>
    </div>
  )
}


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>,document.getElementById('root'));

reportWebVitals();
