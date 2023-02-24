import React from "react";
import { UserRecord } from "../../../types/UserRecord";
import { OneUser } from "../OneUser/OneUser";
import './UserList.css'

type Props = {
  list: UserRecord[],
  handleClick?: any
}

export const UsersList = (props: Props) => (
  <ul className="userList">
    {props.list.map(user => (<OneUser key={user.id} id={user.id} name={user.name} surname={user.surname} job={user.job} handle={props.handleClick}/>))}
  </ul>
)