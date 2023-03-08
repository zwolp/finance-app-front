import React from "react";
import { financeProductRecord } from "../../types/User";
import { ProductEntity } from "./ProductEntity";

type Props = {
  list: financeProductRecord[] | null;
};

export const ProductsList = (props: Props) => {

  
  return (
    <ul>
    {props.list && props.list.map(obj => (
      <li key={obj.productId}>
        <ProductEntity 
          id={obj.productId}
          startDate={obj.startDate}
          resources={obj.resources}
          />
      </li>))}
    </ul>
  )
}