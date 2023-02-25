import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "../common/Btn/Btn";
import "./Menu.css"

export const Menu = () => {
  return (
    <header>
      <NavLink 
        to='/' 
        className={({ isActive }) => isActive ? 'active' : undefined}>
          <Btn><p>home</p></Btn>
      </NavLink>
      <NavLink 
        to='/user'
        className={({ isActive }) => isActive ? 'active' : undefined}>
          <Btn><p>user</p></Btn>
      </NavLink>
      <NavLink 
        to='/news'
          className={({ isActive }) => isActive ? 'active' : undefined}>
          <Btn><p>news</p></Btn>
      </NavLink>
    </header>
  )
}