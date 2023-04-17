import React, { SyntheticEvent, useState } from "react";
import { currentDateToSend } from "../../../utils/getDate";
import { Article } from "types";
import './AddArticle.scss'
import { apiUrl } from "../../../config/api";

const obj: Omit<Article, 'id'> = {
  title: '',
  description: '',
  date: currentDateToSend(new Date())
}

type Props = {
  hide: () => void,
  language: any,
}

export const AddArticle = (props: Props) => {
  const [article, setArticle] = useState(obj)

  const saveArticle = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl + '/admin/add-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
      });
      if (res.status === 200) {
        setArticle(obj)
        props.hide()
      }
    } catch (e) {
      console.log(e);
    }
  }

  return <div className="AddArticle">
  <form onSubmit={saveArticle}>
    <h4>{props.language.addArticle.newArticle}</h4>
    <label>
      <p>{props.language.currentArticles.title}</p>
      <input 
        type="text" 
        name="title" 
        required
        value={article.title} 
        onChange={e => setArticle({...article, title: e.target.value})}
      />
    </label>
    <label>
      <p>{props.language.addArticle.contents}</p>
      <textarea 
        name="description" 
        cols={30} 
        rows={10}
        required
        value={article.description} 
        onChange={e => setArticle({...article, description: e.target.value})}
      />
    </label>
    <button className="button">{props.language.addUserForm.formButton}</button>
  </form>
</div>
}