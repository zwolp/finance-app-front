import React from "react";

type Props = {
  title: string,
  date: string,
  children: string
}

export const Article = (props: Props) => {
  return (
    <div className="article">
      <p className="article-date">
        {props.date}
      </p>
      <h3 className="article-title">
        {props.title}
      </h3>
      <p className="article-description">
        {props.children}
      </p>
    </div>
  )
}