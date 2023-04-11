import React from "react";
import { FinanceProductRecord } from "types";
import { ProductOfUser } from "../Product/ProductOfUser";
import './FinanceProductsList.scss'

type Props = {
  list: FinanceProductRecord[] | null,
  userSavings: number,
};

export const FinanceProductsList = (props: Props) => {
  
  return (
    <div className="FinanceProductsList">
      {props.list?.length ? <h4>Aktywne produkty</h4> : null}
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
    </div>
  )
}