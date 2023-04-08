import React, { useEffect, useState } from "react";
import { Error } from "../../components/common/Error/Error";
import { Loading } from "../../components/common/Loading/Loading";
import { AddUserForm } from "../../components/User/AddUser/AddUserForm";
import { UsersList } from "../../components/User/UsersList/UsersList";
import { UserPersonal } from "types"
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";

export const User = () => {
  const [users, setUsers] = useState<UserPersonal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleUsers = async () => {
    try {
      const res = await fetch('http://localhost:3001/user/');
      const data = await res.json() as UserPersonal[];
      setUsers(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false)
      setError('Wystąpił błąd, spróbuj później.')
    }
  };

  useEffect(() => {
    handleUsers()
  },[]);

  return <>
    <ViewTitle title="Użytkownicy"/>
    {loading && <Loading/>}
    {error && <Error>{error}</Error>}
    {users.length && <UsersList list={users}/>}
    <AddUserForm/>
  </>
}