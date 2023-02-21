import React from "react";

type Props = {
  id: string,
  name: string,
  surname: string,
  job: string
}
export const OneUser = (props: Props) => (
  <li key={props.id}>
    <p className="name">{`${props.name} ${props.surname}`}</p>
    <p className="job">{props.job}</p>
  </li>
)