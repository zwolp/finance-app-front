import React from "react";
import { NavLink } from "react-router-dom";
import "./Menu.scss"
type Props = {
  loggedAdmin: boolean,
  language: any,
  changeLanguage: () => void,
  buttonText: string,
}

export const Menu = (props: Props) => {

  return (
    <header>
      <div className="buttons">
        <NavLink 
          to='/' 
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
            {props.language.menu.mainSite}
        </NavLink>
        <NavLink 
          to='/user'
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
            {props.language.menu.users}
        </NavLink>
        <NavLink 
          to='/news'
          className={({ isActive }) => isActive ? 'active' : undefined}
        >
            {props.language.menu.news}
        </NavLink>
      </div>
      <div className="admin">
        <button className="language-button" onClick={props.changeLanguage}>
          {props.buttonText}
        </button>
        {props.loggedAdmin && 
          <button
          onClick={() => {window.location.reload()}}
          >
            {props.language.menu.logOut}
          </button> 
        }
      <NavLink
        to='/admin'
        className={({ isActive }) => isActive ? 'active' : undefined}
      >
        {props.language.menu.admin}
      </NavLink>
      </div>
    </header>
  )
}