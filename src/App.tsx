import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { User } from './views/Users/Users';
import { News } from './views/News/News';
import { SingleUser } from './views/SingleUser/SingleUser';
import { Menu } from './components/Menu/Menu';
import "./App.css"
import { LoginPanel } from './views/Admin/LoginPanel';
import { AdminPanel } from './views/Admin/AdminPanel';

export const App = () => {
  const [loggedAdmin, setLoggedAdmin] = useState(false);
  const handleLoggedAdmin = (isLogged: boolean) => {
    setLoggedAdmin(isLogged)
  }

  return (
    <>
      <Menu loggedAdmin={loggedAdmin}/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/user/:id' element={<SingleUser/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/admin' element={loggedAdmin ? <AdminPanel/> : <LoginPanel handleLoggedAdmin={handleLoggedAdmin}/>}/>
        </Routes>
      </div>
    </>
  );
}
