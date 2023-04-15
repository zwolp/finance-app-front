import React, { useState } from "react";
import "./News.scss"
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import { ProductView } from "../../components/News/Products/ProductsView";
import { ArticlesView } from "../../components/News/Articles/ArticlesView";

export const News = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [title, setTitle] = useState('Artykuły');
  const [buttonText, setButtonText] = useState('Produkty');

  const handleClick = () => {
    if (showProducts) {
      setShowProducts(false);
      setTitle('Artykuły')
      setButtonText('Produkty')
      return
    }
    setShowProducts(true);
    setTitle('Produkty')
    setButtonText('Artykuły')
  }

  return <>
    <ViewTitle title="Aktualności"/>
    <div className="News">
      <div className="container">
        <h3>{title}</h3>
        <button onClick={handleClick}>{buttonText}</button>
      </div>
        {
          showProducts ? 
          <ProductView/> :
          <ArticlesView/>
        }
    </div>
  </>
}