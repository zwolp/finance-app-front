import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { User } from './views/Users/Users';
import { News } from './views/News/News';
import { Menu } from './components/Menu/Menu';
import "./App.css"
import { SingleUser } from './views/SingleUser/SingleUser';

export const App = () => {
  return (
    <>
      <Menu/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/user/:id' element={<SingleUser/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
    </>
  );
}
