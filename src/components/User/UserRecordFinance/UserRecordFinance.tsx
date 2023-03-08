import React, { useEffect, useState } from "react";
import { Finance, financeProductRecord } from "../../../types/User";
import { Error } from "../../common/Error/Error";
import { Loading } from "../../common/Loading/Loading";
import { ProductsList } from "../../Product/ProductsList";
import { FinanceRecord } from "../FinanceRecord/FinanceRecord";

type Props = {
  financeId: string;
}

export const UserRecordFinance = (props: Props) => {
  const [finance, setFinance] = useState<Finance | null>(null);
  const [financeAndProductsList, setFinanceAndProductsList] = useState<financeProductRecord[] | null>(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/finance/' + props.financeId);
        const data = await res.json();
        setFinance(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError('Wystąpił błąd, spróbuj później.');
        setLoading(false)
      }
    })()
  }, [props.financeId])
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/product/user/' + props.financeId);
        const data = await res.json();
        console.log(data);
        setFinanceAndProductsList(data);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [props.financeId])


  if (loading) {
    return <Loading/>
  }
  if (finance) {
    return <>
      <FinanceRecord salary={finance.salary} expanse={finance["monthly expanse"]} savings={finance.savings}/>
      {financeAndProductsList && <ProductsList list={financeAndProductsList}/>}
      <div className="addProduct">
        <input type="text" />
        <button>dodaj</button>
      </div>
  </>
  }
  return <Error>{error}</Error>
}