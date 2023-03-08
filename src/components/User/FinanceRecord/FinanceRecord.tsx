import React from "react";
import { FinancialOperations } from "../../../utils/financeOperation";
import { FinanceRow } from "./FInanceRow";

type Props = {
  salary: number,
  expanse: number,
  savings: number
}

export const FinanceRecord = (props: Props) => {
  
  const financialCushion = FinancialOperations.financialCushion(props.expanse)

  return (
    <ul>
      <FinanceRow title="Miesięczne zarobki" data={props.salary} change="podwyżka"/>
      <FinanceRow title="Miesięczne wydatki" data={props.expanse} change="niespodziewany wydatek"/>
      <FinanceRow title="Wolne oszczędności" data={props.savings > financialCushion ?
         props.savings - financialCushion : 
         `Przed inwestycjami należy odłożyć oszczędności w wysokości: ${financialCushion} pozostało jeszcze: ${financialCushion - props.savings}`} />
      <FinanceRow title="Poduszka finansowa" data={financialCushion}/>
    </ul>
    )
}