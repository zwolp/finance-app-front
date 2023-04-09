import React from "react";
import "./FinanceRow.scss"

type Props = {
  title: string,
  data: number | string,
}

export const FinanceRow = (props: Props) => {
  return (
    <li key={props.title} className="FinanceRow">
      <p><span>{props.title}</span></p>
      <p>{props.data} zł</p>
    </li>
  )
}