import React from "react";
import { FinancialOperations } from "../../../../utils/financeOperation";
import { ForecastFinanceProductRecord } from "types";

type Props = {
  title: string,
  salary: number,
  expanse: number,
  savings: number,
  monthlyDifference: number,
  finishedProducts: ForecastFinanceProductRecord[] | [],
}

export const ForecastSavings = (props: Props) => {

  const depositProfit = props.finishedProducts.length > 0 ? 
    props.finishedProducts.map(
      product => (product.resources + FinancialOperations.depositProfit(product.resources, product.duration, product.annualInterestRate)
      )) : 0;
  
  const summaryProfit = depositProfit ? depositProfit.reduce((prev, curr) => prev + curr, 0) : 0;
 
  return <div>
    <h4>{props.title}</h4>
    {props.monthlyDifference > 0 ?
      props.savings + ((props.salary * props.monthlyDifference) - (props.expanse * props.monthlyDifference)) + summaryProfit : 
      props.savings}
  </div>
}