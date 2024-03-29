import React, { useEffect, useState } from "react";
import { ArticleRow } from "./ArticleRow/ArticleRow";
import { Article } from "types";
import { Loading } from "../../../components/common/Loading/Loading";
import { Error } from "../../../components/common/Error/Error";
import "./ArticlesView.scss"
import { apiUrl } from "../../../config/api";

type Props = {
  language: any,
}

export const ArticlesView = (props: Props) => {
  const [articles, setArticles] = useState<Article[] | []>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getArticles = async () => {
    try {
      const res = await fetch(apiUrl + '/admin/articles');
      const data = await res.json();
      setArticles(data)
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false);
      setError(true)
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <Error>{props.language.error}</Error>
  }
  return (
    <ul className="Articles">
      {articles.length > 0 ?
        articles.map(article => <li key={article.id}><ArticleRow article={article}/></li>) :
        <p>{props.language.articlesView.emptylist}</p>
      }
    </ul>
)}