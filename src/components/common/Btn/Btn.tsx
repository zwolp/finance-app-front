import React from "react";
import "./Btn.css"

type Props = {
  children: string | JSX.Element
}

export const Btn = (props: Props) => {

  return (
    <button className="btn">
      {props.children}
    </button>
  )
}