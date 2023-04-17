import React, { useState } from "react";
import { Product } from "types";
import { AddPanel } from "../FinanceProduct/AddPanel";

type Props = {
  product: Product,
  financeId: string,
  savings: number,
  monthlyExpanse: number,
  language: any,
}

export const ProductRow = (props: Props) => {
  const [displayAddPanel, setDisplayAddPanel] = useState<boolean>(false);

  const {id, name, annualInterestRate, durationInDays, minContribution, maxContribution} = props.product;

  const handleClick = (e: React.MouseEvent) => {
    displayAddPanel ? setDisplayAddPanel(false) : setDisplayAddPanel(true)
  }

  return <>
    <li>
      <div onClick={handleClick}>
        <p>{name}</p>
        <p>{annualInterestRate} % {props.language.productRow.perYear}</p>
        <p>{props.language.productRow.period} {durationInDays} {props.language.productRow.days}</p>
        <p>{props.language.productRow.contribution} {minContribution} zł - {maxContribution} zł</p>
      </div>
      {displayAddPanel && 
      <AddPanel 
        financeId={props.financeId} 
        productId={id} 
        savings={props.savings} 
        monthlyExpanse={props.monthlyExpanse}
        minContribution={props.product.minContribution}
        maxContribution={props.product.maxContribution}
        language={props.language}
    />}
    </li>
  </>
}