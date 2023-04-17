import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './views/Home/Home';
import { User } from './views/Users/Users';
import { News } from './views/News/News';
import { SingleUser } from './views/SingleUser/SingleUser';
import { Menu } from './components/Menu/Menu';
import "./App.scss"
import { LoginPanel } from './views/Admin/LoginPanel';
import { AdminPanel } from './views/Admin/AdminPanel';
import { en } from './language/en';
import { pl } from './language/pl';

export const App = () => {
  const [loggedAdmin, setLoggedAdmin] = useState(false);
  const [language, setLanguage] = useState(en);
  const [buttonText, setButtonText] = useState('en');

  useEffect(() => {
    const usedLang = localStorage.getItem('language')
    if (usedLang === null || usedLang === 'en') {
      setLanguage(en);
      setButtonText('pl');
    }
    if (usedLang === 'pl') {
      setLanguage(pl);
      setButtonText('en');
    } 
  }, [])

  const changeLanguage = () => {
    if (language === en) {
      localStorage.setItem('language', 'pl');
      setLanguage(pl);
      setButtonText('en');
    } else {
      localStorage.setItem('language', 'en');
      setLanguage(en);
      setButtonText('pl');
    }
    console.log(localStorage.getItem('language'));
  }

  const handleLoggedAdmin = (isLogged: boolean) => {
    setLoggedAdmin(isLogged)
  }

  return (
    <div className='App'> 
      <Menu 
        loggedAdmin={loggedAdmin} 
        language={language} 
        changeLanguage={changeLanguage} 
        buttonText={buttonText}
      />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home language={language}/>}/>
          <Route path='/user' element={<User language={language}/>}/>
          <Route path='/user/:id' element={<SingleUser language={language}/>}/>
          <Route path='/news' element={<News language={language}/>}/>
          <Route path='/admin' element={loggedAdmin ? <AdminPanel language={language}/> : <LoginPanel handleLoggedAdmin={handleLoggedAdmin} language={language}/>}/>
        </Routes>
      </div>
    </div>
  )
}
