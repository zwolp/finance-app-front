import React, { useEffect, useState } from "react";
import { Loading } from "../../components/common/Loading/Loading";
import { AddUserForm } from "../../components/User/AddUser/AddUserForm";
import { UsersList } from "../../components/User/UsersList/UsersList";
import { UserPersonal } from "../../types/User";

export const User = () => {
  const [users, setUsers] = useState<UserPersonal[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/user');
        const data = await res.json() as UserPersonal[];
        setUsers(data);
        setLoading(false)
      } catch (e) {
        console.log(e);
      }
    })();
  },[]);
  return <>
    {loading ? <Loading/> : <UsersList list={users}/>}
    <AddUserForm/>
  </>
}