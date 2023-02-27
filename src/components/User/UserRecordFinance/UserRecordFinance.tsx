import React, { useEffect, useState } from "react";
import { Finance, User } from "../../../types/User";
import { Error } from "../../common/Error/Error";
import { Loading } from "../../common/Loading/Loading";

type Props = {
  financeId: string;
}

export const UserRecordFinance = (props: Props) => {
  const [finance, setFinance] = useState<Finance | null>(null);  
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/finance/' + props.financeId);
      const data = await res.json();
      setFinance(data);
      setLoading(false);
    })()
  }, [])

  return <>
    {loading && <Loading/>}
    {finance ? <p>{finance.salary}</p> : <Error>Nie prawidłowe id finansów</Error>}
  </>
/*   useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/finance/' + props.user.finance);
      const data = await res.json();
      setFinance(data);
      setLoading(false);
    })()
  }, [])

  if (loading) {
    return <Loading/>
  } else if (!finance) {
    return <p>nie ma finance</p>
  } else {
  return <>
  <p>{finance.salary}</p>
  <p>{finance.savings}</p>
  <p>{finance["monthly expanse"]}</p>
  </>
  } */
}