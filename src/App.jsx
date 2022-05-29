import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Registration from './Registration';
import Contact from './Contact';
import Dashboard from './Dashboard';
import Home from './Home';
import Layout from './Layout';
import { store } from './store/store';



function App() {
  return (
      <div className="App">
      <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='register' element={<Registration/>}/>
        </Route>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
      </BrowserRouter>
      </Provider>
     </div>

  );
}

export default App;