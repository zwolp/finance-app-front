import React from "react";

type Props = {
  title: string,
  data: number | string,
}

export const FinanceRow = (props: Props) => {
  return (
    <li key={props.title}>
      <p>{props.title}</p>
      <p>{props.data} zł</p>
    </li>
  )
}