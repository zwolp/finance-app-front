import React, { useEffect, useState } from "react";
import { Finance, financeProductRecord } from "../../../types/User";
import { Error } from "../../common/Error/Error";
import { Loading } from "../../common/Loading/Loading";
import { FinanceChanges } from "../../Finance/FinanceChanges";
import { FinanceProductsList } from "../../Product/FinanceProduct/FinanceProductsList";
import { FinanceRecord } from "../../Finance/FinanceRecord/FinanceRecord";
import { ProductList } from "../../Product/Product/ProductList";

type Props = {
  financeId: string;
}

export const UserRecordFinance = (props: Props) => {
  const [finance, setFinance] = useState<Finance | null>(null);
  const [financeAndProductsList, setFinanceAndProductsList] = useState<financeProductRecord[] | null>(null);
  const [displayProducts, setDisplayProducts] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const handleFinance = async () => {
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
  } 
  const handleFinanceAndProduct = async () => {
    try {
      const res = await fetch('http://localhost:3001/product/user/' + props.financeId);
      const data = await res.json();
      setFinanceAndProductsList(data);
    } catch (e) {
      console.log(e);
    }
  }
  
  useEffect(() => {
    handleFinance();
    handleFinanceAndProduct();
  }, [])

  const handleClick = (e: React.MouseEvent) => {
    displayProducts ? setDisplayProducts(false) : setDisplayProducts(true)
  }

  if (loading) {
    return <Loading/>
  }
  if (finance) {
    return <>
      <FinanceRecord salary={finance.salary} expanse={finance.monthlyExpanse} savings={finance.savings}/>
      <FinanceChanges/>
      {financeAndProductsList && <FinanceProductsList list={financeAndProductsList}/>}
      <div className="addProduct">
        <button onClick={handleClick}>Dodaj produkt</button>
        {displayProducts && <ProductList financeId={props.financeId}/>}
      </div>
  </>
  }
  return <Error>{error}</Error>
}