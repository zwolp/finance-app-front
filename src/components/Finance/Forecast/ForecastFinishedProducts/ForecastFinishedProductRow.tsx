import React from "react";
import { finishedProduct } from "types";

type Props = {
  finishedProduct: finishedProduct,
  language: any,
}

export const ForecastFinishedProductRow = (props: Props) => {
  return <div>
    <p>{props.finishedProduct.endDate}</p>
    <div>
      <p>{props.language.product}: {props.finishedProduct.name}</p>
      <p>{props.language.profit}: {props.finishedProduct.profit}</p>
    </div>
  </div>
}