import React, { useState } from "react";
import { FinancialOperations } from "../../../utils/financeOperation";
import { financeProductRecord } from "types";
import { currentDateToSend} from "../../../utils/getDate";

type Props = {
  financeId: string,
  productId: string,
  savings: number,
  monthlyExpanse: number,
  minContribution: number,
  maxContribution: number
}

export const AddPanel = (props: Props) => {
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string>('');

  const postProduct = async (body: financeProductRecord) => {
    console.log(props.savings);
    try {
      const res = await fetch('http://localhost:3001/product/add-product', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
      })
      return res;
    } catch (e) {
      console.log(e);
    }
  } 
  const changeSavings = async (body: {savings: number}) => {
    try {
      await fetch('http://localhost:3001/finance/' + props.financeId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    } catch (e) {
      console.log(e);
    }
    return true
  }

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!value || value <= 0) {
      setError('Nie prawidłowa wartość');
      return;
    };
    if (value > props.savings - FinancialOperations.financialCushion(props.monthlyExpanse)) {
      setError('Brak wolnych oszczędności');
      return;
    };
    if (value < props.minContribution) {
      setError('Za mały wkład finansowy');
      return;
    };
    if (value > props.maxContribution) {
      setError('Za duży wkład finansowy');
      return;
    };

    const financeProductOfUser = {
      financeId: props.financeId,
      productId: props.productId,
      startDate: currentDateToSend(new Date()),
      resources: value
    } as financeProductRecord;

    const resProduct = await postProduct(financeProductOfUser);
    const resFinance = await changeSavings({savings: props.savings - value})
    
    if(resProduct?.status === 200 && resFinance) {
      window.location.reload();
    }
  }

  return <>
    <form className="addProductForm">
      <p>{error}</p>
      <input 
        name="resources"
        type="number"
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        />
      <input 
        type="submit" 
        value="Dodaj produkt"
        onClick={handleClick}
        />
    </form>
  </>
}