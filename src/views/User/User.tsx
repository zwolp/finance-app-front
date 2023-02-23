import React, { useEffect, useState } from "react";
import { AddUserForm } from "../../components/User/AddUser/AddUserForm";
import { UsersList } from "../../components/User/UsersList/UsersList";
import { UserRecord } from "../../types/UserRecord";

export const User = () => {
  const [users, setUsers] = useState<UserRecord[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/user');
        const data = await res.json() as UserRecord[];
        setUsers(data);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    })();
  },[]);

  return <>
    <UsersList list={users}/>
    <AddUserForm/>
  </>
}