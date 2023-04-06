import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss"

type Props = {
  loggedAdmin: boolean,
}

export const Menu = (props: Props) => {
  return (
    <header>
      <div className="buttons">
        <NavLink 
          to='/' 
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
            home
        </NavLink>
        <NavLink 
          to='/user'
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
            user
        </NavLink>
        <NavLink 
          to='/news'
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
            news
        </NavLink>
      </div>
      <div className="admin">
        {props.loggedAdmin ? 
          <button
          onClick={() => {window.location.reload()}}
        >
          wyloguj
        </button> :
          <NavLink
          to='/admin'
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
          administrator
        </NavLink>}
      </div>
    </header>
  )
}