import React, { useState } from "react";
import { FinancialOperations } from "../../../utils/financeOperation";
import { FinanceProductRecord } from "types";
import { currentDateToSend} from "../../../utils/getDate";
import { apiUrl } from "../../../config/api";

type Props = {
  financeId: string,
  productId: string,
  savings: number,
  monthlyExpanse: number,
  minContribution: number,
  maxContribution: number,
  language: any,
}

export const AddPanel = (props: Props) => {
  const [value, setValue] = useState<number | ''>('');
  const [error, setError] = useState<string>('');

  const postProduct = async (body: FinanceProductRecord) => {
    try {
      const res = await fetch(apiUrl + '/finance-product/', {
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
      await fetch(apiUrl + '/finance/' + props.financeId, {
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
      setError(props.language.addPanel.wrongValue);
      return;
    };
    if (value > props.savings - FinancialOperations.financialCushion(props.monthlyExpanse)) {
      setError(props.language.addPanel.noSpareSavings);
      return;
    };
    if (value < props.minContribution) {
      setError(props.language.addPanel.littleContribution);
      return;
    };
    if (value > props.maxContribution) {
      setError(props.language.addPanel.toMuchContribution);
      return;
    };

    const financeProductOfUser = {
      financeId: props.financeId,
      productId: props.productId,
      startDate: currentDateToSend(new Date()),
      resources: value
    } as FinanceProductRecord;

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
        value={props.language.addUserForm.formButton}
        className="button"
        onClick={handleClick}
        />
    </form>
  </>
}