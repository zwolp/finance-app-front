import React from "react";
import { NavLink } from "react-router-dom";
import { Btn } from "../common/Btn/Btn";
import "./Menu.css"

export const Menu = () => {
  return (
    <header>
      <NavLink to='/'><Btn><p>home</p></Btn></NavLink>
      <NavLink to='/user'><Btn><p>user</p></Btn></NavLink>
      <NavLink to='/news'><Btn><p>news</p></Btn></NavLink>
    </header>
  )
}