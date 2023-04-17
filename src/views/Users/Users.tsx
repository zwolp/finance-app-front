import React, { useEffect, useState } from "react";
import { Error } from "../../components/common/Error/Error";
import { Loading } from "../../components/common/Loading/Loading";
import { AddUserForm } from "../../components/User/AddUser/AddUserForm";
import { UsersList } from "../../components/User/UsersList/UsersList";
import { UserPersonal } from "types"
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import "./Users.scss"
import { apiUrl } from "../../config/api"

type Props = {
  language: any,
}

export const User = (props: Props) => {
  const [users, setUsers] = useState<UserPersonal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleUsers = async () => {
    try {
      const res = await fetch(apiUrl + '/user');
      const data = await res.json() as UserPersonal[];
      setUsers(data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false)
      setError(props.language.error)
    }
  };

  useEffect(() => {
    handleUsers()
  },[]);

  return <>
    <ViewTitle title={props.language.users.title}/>
    <div className="Users">
      {loading && <Loading/>}
      {error && <Error>{error}</Error>}
      {users.length && <UsersList list={users}/>}
      <AddUserForm language={props.language}/>
    </div>
  </>
}