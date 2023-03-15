import React from "react";
import { UserPersonal } from "../../../types/User";
import { UserRecord } from "../UserRecord/UserRecord";
import './UserList.scss'

type Props = {
  list: UserPersonal[],
}

export const UsersList = (props: Props) => (
  <ul className="userList">
    {props.list.map(user => (
      <UserRecord 
        key={user.id} 
        id={user.id} 
        name={user.name} 
        surname={user.surname} 
        job={user.job}/>
    ))}
  </ul>
)