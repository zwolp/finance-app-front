import React, { useState } from "react";
import { Product } from "types";
import { AddPanel } from "../FinanceProduct/AddPanel";

type Props = {
  product: Product,
  financeId: string,
  userSavings: number,
}

export const ProductRow = (props: Props) => {
  const {id, name, annualInterestRate, durationInDays, minContribution, maxContribution, description} = props.product;

  const [displayAddPanel, setDisplayAddPanel] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    displayAddPanel ? setDisplayAddPanel(false) : setDisplayAddPanel(true)
  }

  return <>
    <li onClick={handleClick}>
      <p>{name}</p>
      <p>{annualInterestRate} % w skali roku</p>
      <p>Okres {durationInDays} dni</p>
      <p>Wkład od {minContribution} zł do {maxContribution} zł</p>
      <p>{description && description}</p>
    </li>
    {displayAddPanel && <AddPanel financeId={props.financeId} productId={id} userSavings={props.userSavings}/>}
  </>
}