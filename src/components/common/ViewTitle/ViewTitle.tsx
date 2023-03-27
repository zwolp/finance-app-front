import React from "react";
import "./ViewTitle.scss"

type Props = {
  title: string,
}

export const ViewTitle = (props: Props) => {
  return <div className="ViewTitle">
    <h2>{props.title}</h2>
    <hr />
  </div>
}