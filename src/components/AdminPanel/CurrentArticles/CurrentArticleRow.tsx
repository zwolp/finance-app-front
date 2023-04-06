import React, { useState } from "react";
import { currentDateToSend } from "../../../utils/getDate";
import { Article } from "types";

type Props = {
  article: Article
}

export const CurrentArticleRow = (props: Props) => {
  const [info, setInfo] = useState('')
  const [displayDescription, setDisplayDescription] = useState(false)
  const [buttonText, setButtonText] = useState('Pokaż treść')
  const showText = 'Pokaż treść';
  const hideText = 'Ukryj treść';

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
      const res = await fetch('http://localhost:3001/admin/article/' + id, {
        method: 'DELETE',
      })
      return res
    } catch (e) {
      console.log(e);
      setInfo('Przepraszamy wystąpił błąd, spróbuj później');
    }
  }

  const handleDeleteButton = () => {
    deleteArticle(props.article.id);
    setInfo(`Artykuł o tytule ${props.article.title} został usunięty`)
  }

  return <>
    <div className="CurrentArticleRow">
      <p>Data dodania: {currentDateToSend(new Date(props.article.date))}</p>
      <p>Tytuł: {props.article.title}</p>
      <button onClick={display}>{buttonText}</button>
      {displayDescription ? <p>{props.article.description}</p> :null}
      <button onClick={handleDeleteButton}>Usuń</button>
    </div>
    <p>{info}</p>
  </>
}