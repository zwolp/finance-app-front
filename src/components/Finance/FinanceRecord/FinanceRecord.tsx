import React from "react";
import { FinancialOperations } from "../../../utils/financeOperation";
import { FinanceRow } from "./FInanceRow";
import "./FinanceRecord.scss"

type Props = {
  salary: number,
  expanse: number,
  savings: number
}

export const FinanceRecord = (props: Props) => {
  const financialCushion = FinancialOperations.financialCushion(props.expanse)
  return (
    <ul className="FinanceRecord">
      <FinanceRow 
        title="Miesięczne zarobki" 
        data={props.salary}
      />
      <FinanceRow 
        title="Miesięczne wydatki" 
        data={props.expanse}
      />
      <FinanceRow 
        title={props.savings >= financialCushion ? 
          "Wolne oszczędności" : 
          `Przed inwestycjami należy odłożyć oszczędności w wysokości: ${financialCushion} zł pozostało:`
        } 
        data={props.savings > financialCushion ?
          props.savings - financialCushion : 
          financialCushion - props.savings
        } 
      />
      <FinanceRow 
        title="Finansowa poduszka bezpieczeństwa" 
        data={financialCushion}
      />
    </ul>
    )
}