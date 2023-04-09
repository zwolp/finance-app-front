import React from "react";
import { NavLink } from "react-router-dom";
import './UserRecord.scss'
import user from './user.png'

type Props = {
  id: string,
  name: string,
  surname: string,
  job: string,
}

export const UserRecord = (props: Props) => {
  const userUrl = `/user/${props.id}`
  return <>
      <li key={props.id}  className="user">
        <NavLink to={userUrl} className="user-link">
            <img src={user} alt="user" />
            <p className="name">{`${props.name} ${props.surname}`}</p>
            <p className="job">{props.job}</p>
        </NavLink>
      </li>
  </>
}