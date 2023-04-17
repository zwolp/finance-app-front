import React, { useState } from "react";
import { currentDateToSend } from "../../../utils/getDate";
import { Article } from "types";
import './CurrentArticleRow.scss'
import { apiUrl } from "../../../config/api";

type Props = {
  article: Article
  language: any,
}

export const CurrentArticleRow = (props: Props) => {
  const [info, setInfo] = useState('')
  const [displayDescription, setDisplayDescription] = useState(false)
  const [buttonText, setButtonText] = useState(props.language.currentArticles.showText)
  const showText = props.language.currentArticles.showText;
  const hideText = props.language.currentArticles.hideText;

  const display = () => {
    if (displayDescription) {
      setDisplayDescription(false);
      setButtonText(showText);
    } else {
      setDisplayDescription(true);
      setButtonText(hideText);
    }
  }

  const deleteArticle = async (id: string) => {
    try {
      const res = await fetch(apiUrl + '/admin/article/' + id, {
        method: 'DELETE',
      })
      return res
    } catch (e) {
      console.log(e);
      setInfo(props.language.error);
    }
  }

  const handleDeleteButton = () => {
    deleteArticle(props.article.id);
    setInfo(`${props.language.currentArticles.articleTitle}  ${props.article.title} ${props.language.currentProducts.deleted}`)
  }

  return <>
    <div className="CurrentArticleRow">
      <p><span>{props.language.currentArticles.date}</span> {currentDateToSend(new Date(props.article.date))}</p>
      <p><span>{props.language.currentArticles.title}</span> {props.article.title}</p>
      {displayDescription ? <p>{props.article.description}</p> :null}
      <div className="button-container">
        <button onClick={display}>{buttonText}</button>
        <button onClick={handleDeleteButton}>{props.language.delete}</button>
      </div>
    </div>
    <p className="info">{info}</p>
  </>
}