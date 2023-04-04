import React from "react";
import { finishedProduct } from "types";
import { ForecastFinishedProductRow } from "./ForecastFinishedProductRow";

type Props = {
  title: string,
  finishedProducts: finishedProduct[];
}

export const ForecastProducts = (props: Props) => {
  return <div>
    <h4>{props.title}</h4>
    <ul>
      {props.finishedProducts.map((product, i) => (
      <li key={product.name + i}>
        <ForecastFinishedProductRow finishedProduct={product}/>
      </li>))}
    </ul>
  </div>
}