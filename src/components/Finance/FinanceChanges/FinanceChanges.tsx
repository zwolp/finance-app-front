import React, { useState } from "react";
import { ChangePanel } from "./ChangePanel";
import "./FinanceChanges.scss"

type Props = {
  financeId: string,
  salary: number,
  monthlyExpanse: number,
  savings: number,
}

export const FinanceChanges = (props: Props) => {
  const [displayChanges, setDisplayChanges] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    displayChanges ? setDisplayChanges(false) : setDisplayChanges(true)
  }
  
  return (
    <div className="FinanceChanges">
      <button onClick={handleClick}>Zmiana w finansach</button>
      {displayChanges && <ChangePanel financeId={props.financeId} salary={props.salary} monthlyExpanses={props.monthlyExpanse} savings={props.savings}/>}
    </div>
  )
}