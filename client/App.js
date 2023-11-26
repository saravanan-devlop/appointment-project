import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menu';
import { Home } from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { Appoinment } from './components/appoinment';
import { Login } from './components/loginpage';
import { Clientdashboard } from './components/dashboard';
import { Doctordashboard } from './components/doctordashboard';
import { Clientappoinment } from './components/client-appoinment';
import { Home2 } from './components/home2';
import { Home2card } from './components/home2card';
import { Admin } from './components/admin';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={[<Menu/>,<Home/>,<Home2/>]}/>
      <Route path="/appoinment" element={[<Menu/>,<Appoinment/>]}/>
      <Route path="/loginpage" element={[<Menu/>,<Login/>]}/>
      <Route path="/clientdashboard/:id" element={[<Menu/>,<Clientdashboard/>]}/>
      <Route path="/doctorboard/:id" element={[<Menu/>,<Doctordashboard/>]}/>
      <Route path="/clientappoinment/:id" element={[<Menu/>,<Clientappoinment/>]}/>
      <Route path="/bcard" element={[<Menu/>,<Home2card/>]}/>
      <Route path="/admin" element={[<Menu/>,<Admin/>]}/>
      
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;