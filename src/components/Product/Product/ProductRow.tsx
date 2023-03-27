import React, { useState } from "react";
import { Product } from "types";
import { AddPanel } from "../FinanceProduct/AddPanel";

type Props = {
  product: Product,
  financeId: string,
  savings: number,
  monthlyExpanse: number,
}

export const ProductRow = (props: Props) => {
  const [displayAddPanel, setDisplayAddPanel] = useState<boolean>(false);

  const {id, name, annualInterestRate, durationInDays, minContribution, maxContribution} = props.product;

  const handleClick = (e: React.MouseEvent) => {
    displayAddPanel ? setDisplayAddPanel(false) : setDisplayAddPanel(true)
  }

  return <>
    <li onClick={handleClick}>
      <p>{name}</p>
      <p>{annualInterestRate} % w skali roku</p>
      <p>Okres {durationInDays} dni</p>
      <p>Wkład od {minContribution} zł do {maxContribution} zł</p>
    </li>
    {displayAddPanel && 
      <AddPanel 
        financeId={props.financeId} 
        productId={id} 
        savings={props.savings} 
        monthlyExpanse={props.monthlyExpanse}
        minContribution={props.product.minContribution}
        maxContribution={props.product.maxContribution}
    />}
  </>
}