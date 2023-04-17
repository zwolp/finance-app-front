import React, { useEffect, useState } from "react";
import { Finance, FinanceProductRecord } from "types";
import { Error } from "../../common/Error/Error";
import { Loading } from "../../common/Loading/Loading";
import { FinanceChanges } from "../../Finance/FinanceChanges/FinanceChanges";
import { FinanceProductsList } from "../../Product/FinanceProduct/FinanceProductsList";
import { FinanceRecord } from "../../Finance/FinanceRecord/FinanceRecord";
import { ProductList } from "../../Product/Product/ProductList";
import { Forecast } from "../../Finance/Forecast/Forecast";
import './UserRecordFinance.scss';
import { apiUrl } from "../../../config/api";

type Props = {
  financeId: string;
  language: any,
}

export const UserRecordFinance = (props: Props) => {
  const [finance, setFinance] = useState<Finance | null>(null);
  const [financeAndProductsList, setFinanceAndProductsList] = useState<FinanceProductRecord[] | null>(null);
  const [displayProducts, setDisplayProducts] = useState<boolean>(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const handleFinance = async () => {
    try {
      const res = await fetch(apiUrl + '/finance/' + props.financeId);
      const data = await res.json();
      await setFinance(data);
      await setLoading(false);
    } catch (e) {
      console.log(e);
      setError(props.language.error);
      setLoading(false)
    }
  } 
  const handleFinanceAndProduct = async () => {
    try {
      const res = await fetch(apiUrl + '/finance-product/user/' + props.financeId);
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

    return <div className="UserRecordFinance">
      <div className="flex-row">
        <FinanceRecord 
          salary={finance.salary} 
          expanse={finance.monthlyExpanse} 
          savings={finance.savings}
          language={props.language}
        />
        <FinanceChanges 
          financeId={props.financeId} 
          salary={finance.salary} 
          monthlyExpanse={finance.monthlyExpanse} 
          savings= {finance.savings}
          language={props.language}
        />
        <Forecast
          salary={finance.salary} 
          expanse={finance.monthlyExpanse} 
          savings={finance.savings}
          financeId={props.financeId}
          language={props.language}
        />
      </div>
      {financeAndProductsList && <FinanceProductsList list={financeAndProductsList} userSavings={finance.savings} language={props.language}/>}
      <div className="addProduct">
        <button onClick={handleClick}>{props.language.admin.addProduct}</button>
        {displayProducts && <ProductList financeId={props.financeId} savings={finance.savings} monthlyExpanse={finance.monthlyExpanse} language={props.language}/>}
      </div>
  </div>
  }
  return <Error>{error}</Error>
}