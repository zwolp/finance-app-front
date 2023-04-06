import React, { SyntheticEvent, useState } from "react";
import { currentDateToSend } from "../../../utils/getDate";
import { Article } from "types";

const obj: Omit<Article, 'id'> = {
  title: '',
  description: '',
  date: currentDateToSend(new Date())
}

type Props = {
  hide: () => void,
}

export const AddArticle = (props: Props) => {
  const [article, setArticle] = useState(obj)

  const saveArticle = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(article);
    try {
      const res = await fetch('http://localhost:3001/admin/add-article', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
      });
      console.log(res);
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
    <h4>Nowy artykuł</h4>
    <label>
      <p>Tytuł artykułu:</p>
      <input 
        type="text" 
        name="title" 
        required
        value={article.title} 
        onChange={e => setArticle({...article, title: e.target.value})}
      />
    </label>
    <label>
      <p>Treść artykułu:</p>
      <textarea 
        name="description" 
        cols={30} 
        rows={10}
        required
        value={article.description} 
        onChange={e => setArticle({...article, description: e.target.value})}
      />
    </label>
    <input type="submit" />
  </form>
</div>
}