import React from "react";
import { FinanceProductRecord } from "types";
import { ProductOfUser } from "../Product/ProductOfUser";

type Props = {
  list: FinanceProductRecord[] | null,
  userSavings: number,
};

export const FinanceProductsList = (props: Props) => {
  
  return (
    <ul>
    {props.list && props.list.map((obj, i) => (
      <li key={i}>
        <ProductOfUser 
          id={obj.id}
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