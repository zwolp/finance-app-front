import React from "react";
import { finishedProduct } from "types";

type Props = {
  finishedProduct: finishedProduct,
}

export const ForecastFinishedProductRow = (props: Props) => {
  return <div>
    <p>{props.finishedProduct.endDate}</p>
    <div>
      <p>Produkt: {props.finishedProduct.name}</p>
      <p>Zysk: {props.finishedProduct.profit}</p>
    </div>
  </div>
}