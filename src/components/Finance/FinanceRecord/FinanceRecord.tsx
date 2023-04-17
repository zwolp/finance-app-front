import React from "react";
import { FinancialOperations } from "../../../utils/financeOperation";
import { FinanceRow } from "./FInanceRow";
import "./FinanceRecord.scss"

type Props = {
  salary: number,
  expanse: number,
  savings: number
  language: any,
}

export const FinanceRecord = (props: Props) => {
  const financialCushion = FinancialOperations.financialCushion(props.expanse)
  return (
    <ul className="FinanceRecord">
      <FinanceRow 
        title={props.language.financeRecord.earnings} 
        data={props.salary}
      />
      <FinanceRow 
        title={props.language.financeRecord.expanses} 
        data={props.expanse}
      />
      <FinanceRow 
        title={props.savings >= financialCushion ? 
          props.language.financeRecord.savings : 
          `${props.language.financeRecord.beforeInvesting} ${financialCushion} zł ${props.language.financeRecord.left}`
        } 
        data={props.savings > financialCushion ?
          props.savings - financialCushion : 
          financialCushion - props.savings
        } 
      />
      <FinanceRow 
        title={props.language.financeRecord.financialCushion} 
        data={financialCushion}
      />
    </ul>
    )
}