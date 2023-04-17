import React, { useState } from "react";
import "./News.scss"
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import { ProductView } from "../../components/News/Products/ProductsView";
import { ArticlesView } from "../../components/News/Articles/ArticlesView";

type Props = {
  language: any,
}

export const News = (props: Props) => {
  const [showProducts, setShowProducts] = useState(false);
  const [title, setTitle] = useState(props.language.products);
  const [buttonText, setButtonText] = useState(props.language.news.subtitle2);

  const handleClick = () => {
    if (showProducts) {
      setShowProducts(false);
      setTitle(props.language.articles)
      setButtonText(props.language.products)
      return
    }
    setShowProducts(true);
    setTitle(props.language.products)
    setButtonText(props.language.articles)
  }

  return <>
    <ViewTitle title={props.language.news.title}/>
    <div className="News">
      <div className="container">
        <h3>{title}</h3>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
        {
          showProducts ? 
          <ProductView language={props.language}/> :
          <ArticlesView language={props.language}/>
        }
    </div>
  </>
}