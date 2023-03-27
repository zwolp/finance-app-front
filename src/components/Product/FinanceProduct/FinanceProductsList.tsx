import React from "react";
import { financeProductRecord } from "types";
import { ProductOfUser } from "../Product/ProductOfUser";

type Props = {
  list: financeProductRecord[] | null,
  userSavings: number,
};

export const FinanceProductsList = (props: Props) => {
  
  return (
    <ul>
    {props.list && props.list.map((obj, i) => (
      <li key={i}>
        <ProductOfUser 
          productId={obj.productId}
          financeId={obj.financeId}
          startDate={obj.startDate}
          resources={obj.resources}
          userSavings={props.userSavings}
          />
      </li>))}
    </ul>
  )
}