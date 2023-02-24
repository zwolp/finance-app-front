import React from "react";
import './OneUser.css'

type Props = {
  id: string,
  name: string,
  surname: string,
  job: string,
  handle?: any
}

export const OneUser = (props: Props) => {
  return <>
    <li className="user" key={props.id} onClick={props.handle}>
      <p className="name">{`${props.name} ${props.surname}`}</p>
      <p className="job">{props.job}</p>
    </li>
  </>
}