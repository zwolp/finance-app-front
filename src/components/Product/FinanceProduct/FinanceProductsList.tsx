import React from "react";
import { financeProductRecord } from "../../../types/User";
import { ProductOfUser } from "../Product/ProductOfUser";

type Props = {
  list: financeProductRecord[] | null;
};

export const FinanceProductsList = (props: Props) => {
  
  return (
    <ul>
    {props.list && props.list.map((obj, i) => (
      <li key={i}>
        <ProductOfUser 
          id={obj.productId}
          startDate={obj.startDate}
          resources={obj.resources}
          />
      </li>))}
    </ul>
  )
}