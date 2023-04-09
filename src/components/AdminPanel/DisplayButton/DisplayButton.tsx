import React from "react";
import "./DisplayButton.scss"

type Props = {
  title: string,
  click: (e: React.MouseEvent) => void,
}

export const DisplayButton = (props: Props) => {

  return <div className="DisplayButton">
        <button onClick={props.click}>{props.title}</button>
  </div>
}