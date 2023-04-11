import React from "react";
import { getDate } from "../../../../utils/getDate";
import { Article } from "types";

type Props = {
  article: Article
}

export const ArticleRow = (props: Props) => {
  return (
    <div className="article">
      <p className="article-date">
        {getDate(props.article.date)}
      </p>
      <h4 className="article-title">
        {props.article.title}
      </h4>
      <p className="article-description">
        {props.article.description}
      </p>
    </div>
  )
}