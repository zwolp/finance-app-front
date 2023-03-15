import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss"

export const Menu = () => {
  return (
    <header>
      <div className="buttons">
        <NavLink 
          to='/' 
          className={({ isActive }) => isActive ? 'active' : undefined}>
            home
        </NavLink>
        <NavLink 
          to='/user'
          className={({ isActive }) => isActive ? 'active' : undefined}>
            user
        </NavLink>
        <NavLink 
          to='/news'
            className={({ isActive }) => isActive ? 'active' : undefined}>
            news
        </NavLink>
      </div>
    </header>
  )
}