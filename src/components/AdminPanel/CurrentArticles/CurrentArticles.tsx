import React, { useEffect, useState } from "react";
import { Loading } from "../../../components/common/Loading/Loading";
import { Error } from "../../../components/common/Error/Error";
import { Article } from "types";
import { CurrentArticleRow } from "./CurrentArticleRow";
import './CurrentArticles.scss'
import { apiUrl } from "../../../config/api";

type Props = {
  language: any,
}

export const CurrentArticles = (props: Props) => {
  const [list, setList] = useState<Article[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleArticles = async () => {
    try {
    const res = await fetch(apiUrl + '/admin/articles');
    const data = (await res.json()) as Article[];
    setList(data)
    setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    handleArticles()
  }, [])

  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <Error>{props.language.error}</Error>
  }
  if (list.length === 0) {
    return <p>{props.language.currentArticles.emptyList}</p>
  }
  return <ul className="CurrentArticles">
    {list.map((obj, i) => {
      return <li key={i}>
        <CurrentArticleRow article={obj} language={props.language}/>
      </li>
    })}
  </ul>
}