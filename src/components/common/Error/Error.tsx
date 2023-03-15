import React from "react";

type Props = {
  children: string | JSX.Element
}

export const Error = (props: Props) => <p className="error">{props.children}</p>