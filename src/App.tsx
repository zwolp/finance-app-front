import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { User } from './views/User/User';
import { News } from './views/News/News';
import { Menu } from './components/Menu/Menu';
import "./App.css"

export const App = () => {
  return (
    <>
      <Menu/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/user' element={<User/>}/>
          <Route path='/news' element={<News/>}/>
        </Routes>
      </div>
    </>
  );
}
