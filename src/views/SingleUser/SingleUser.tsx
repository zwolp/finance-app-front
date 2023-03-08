import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../components/common/Loading/Loading";
import { AddFinanceForm } from "../../components/User/AddFinance/AddFinanceForm";
import { UserRecordFinance } from "../../components/User/UserRecordFinance/UserRecordFinance";
import { UserRecordPersonal } from "../../components/User/UserRecordPersonal/UserRecordPersonal";
import { User } from "../../types/User";
import './SingleUser.css'

export const SingleUser = () => {
  const [user, setUser] = useState<User | null>(null);
  const {id} = useParams()

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/user/' + id);
        const data = await res.json();
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    })();
  },[id]);
  
  if (user === null) {
    return <Loading/>
  }
  return <>
    <UserRecordPersonal user={user}/>
    {user.financeId ? <UserRecordFinance financeId={user.financeId}/> : <AddFinanceForm id={id}/>}
  </>
}