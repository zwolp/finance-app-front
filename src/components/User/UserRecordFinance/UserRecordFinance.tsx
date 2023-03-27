import React, { useEffect, useState } from "react";/* 
import { Finance, financeProductRecord } from "../../../types/User"; */
import { Finance, financeProductRecord } from "types";
import { Error } from "../../common/Error/Error";
import { Loading } from "../../common/Loading/Loading";
import { FinanceChanges } from "../../Finance/FinanceChanges/FinanceChanges";
import { FinanceProductsList } from "../../Product/FinanceProduct/FinanceProductsList";
import { FinanceRecord } from "../../Finance/FinanceRecord/FinanceRecord";
import { ProductList } from "../../Product/Product/ProductList";
import './UserRecordFinance.scss';

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
      await setFinance(data);
      await setLoading(false);
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
      await setFinanceAndProductsList(data);
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
    /* const userSavings = finance.savings - FinancialOperations.financialCushion(finance.monthlyExpanse); */

    return <div className="UserRecordFinance">
      <div className="flex-row">
        <FinanceRecord 
          salary={finance.salary} 
          expanse={finance.monthlyExpanse} 
          savings={finance.savings}
        />
        <FinanceChanges 
          financeId={props.financeId} 
          salary={finance.salary} 
          monthlyExpanse={finance.monthlyExpanse} 
          savings= {finance.savings}
        />
      </div>
      {financeAndProductsList && <FinanceProductsList list={financeAndProductsList} userSavings={finance.savings}/>}
      <div className="addProduct">
        <button onClick={handleClick}>Dodaj produkt</button>
        {displayProducts && <ProductList financeId={props.financeId} savings={finance.savings} monthlyExpanse={finance.monthlyExpanse}/>}
      </div>
  </div>
  }
  return <Error>{error}</Error>
}