import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/common/Loading/Loading";
import { AddFinanceForm } from "../../components/Finance/AddFinance/AddFinanceForm";
import { UserRecordFinance } from "../../components/User/UserRecordFinance/UserRecordFinance";
import { UserRecordPersonal } from "../../components/User/UserRecordPersonal/UserRecordPersonal";
import { User } from "types";
import './SingleUser.css'
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import { DeleteUser } from "../../components/User/DeleteUser/DeleteUser";
import { apiUrl } from "../../config/api"

type Props = {
  language: any,
}

export const SingleUser = (props: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const {id}  = useParams()

  const handleUser = async () => {
    try {
      const res = await fetch(apiUrl + '/user/' + id);
      const data = await res.json();
      setUser(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleUser()
  },[]);
  
  if (user === null) {
    return <Loading/>
  }
  return <>
    <ViewTitle title={props.language.singleUser.title}/>
    <UserRecordPersonal user={user}/>
    <DeleteUser id={String(id)} name={user.name} language={props.language}/>
    {user.financeId ? <UserRecordFinance financeId={user.financeId} language={props.language}/> : <AddFinanceForm id={id} language={props.language}/>}
  </>
}