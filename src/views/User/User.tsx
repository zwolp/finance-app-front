import React, { useEffect, useState } from "react";
import { AddUserForm } from "../../components/User/AddUser/AddUserForm";
import { OneUser } from "../../components/User/OneUser/OneUser";
/* import { OneUser } from "../../components/User/OneUser/OneUser"; */
type UserRecord = {
  id: string,
  name: string,
  surname: string,
  job: string,
}
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
    <ul className="userList">
      {users.map(user => (<OneUser key={user.id} id={user.id} name={user.name} surname={user.surname} job={user.job}/>))}
    </ul>
    <AddUserForm/>
  </>
}