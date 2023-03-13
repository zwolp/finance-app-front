import React from "react";
import { Product } from "../../../types/Product";

type Props = {
  product: Product,
  financeId: string,
}

export const ProductRow = (props: Props) => {
  const {name, annualInterestRate, durationInDays, minContribution, maxContribution, description} = props.product;

  const handleClick = (e: React.MouseEvent) => {
    const confirm = window.confirm(`Czy chcesz skorzystać z produktu ${name}`);
    console.log(confirm);
  }

  return <li onClick={handleClick}>
    <p>{name}</p>
    <p>{annualInterestRate} % w skali roku</p>
    <p>Okres {durationInDays} dni</p>
    <p>Wkład od {minContribution} zł do {maxContribution} zł</p>
    <p>{description && description}</p>
  </li>
}