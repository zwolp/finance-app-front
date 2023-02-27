import React, { useEffect, useState } from "react";
import { Finance } from "../../../types/User";
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
  }, [props.financeId])

  return <>
    {loading && <Loading/>}
    {finance ? <p>{finance.salary}</p> : <Error>Nie prawidłowe id finansów</Error>}
  </>
}