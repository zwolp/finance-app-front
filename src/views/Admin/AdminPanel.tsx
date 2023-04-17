import React, { useState } from "react";
import { AddProduct } from "../../components/AdminPanel/AddProduct/AddProduct";
import { AddArticle } from "../../components/AdminPanel/AddArticle/AddArticle";
import { DisplayButton } from "../../components/AdminPanel/DisplayButton/DisplayButton";
import { CurrentProducts } from "../../components/AdminPanel/CurrentProducts/CurrentProducts";
import { CurrentArticles } from "../../components/AdminPanel/CurrentArticles/CurrentArticles";
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import './AdminPanel.scss'

type Props = {
  language: any,
}

export const AdminPanel = (props: Props) => {
  const [showProducts, setShowProducts] = useState(false);
  const [buttonText, setButtonText] = useState(props.language.products);
  const [displayNewProduct, setDisplayNewProduct] = useState(false);
  const [displayNewArticle, setDisplayNewArticle] = useState(false);

  const handleClickDisplayNewProduct = () => {
    displayNewProduct ? setDisplayNewProduct(false) : setDisplayNewProduct(true)
  }
  const handleClickDisplayNewArticle = () => {
    displayNewArticle ? setDisplayNewArticle(false) : setDisplayNewArticle(true)
  }

  const handleShowProducts = () => {
    if (showProducts) {
      setShowProducts(false);
      setButtonText(props.language.products);
    } else {
      setShowProducts(true);
      setButtonText(props.language.articles);
    }
  }

  return <>
    <ViewTitle title={props.language.admin.titlePanel}/>
    <div className="AdminPanel">
      <button className="show-products" onClick={handleShowProducts}>{buttonText}</button>
      {
        showProducts ? <>
          <div className="container">
            <CurrentProducts language={props.language}/>
            <div className="add-product">
              <DisplayButton title={props.language.admin.addProduct} click={handleClickDisplayNewProduct}/>
              {displayNewProduct && <AddProduct hide={handleClickDisplayNewProduct} language={props.language}/>}
            </div>
          </div>
        </> : <>
          <div className="container">
            <CurrentArticles language={props.language}/>
            <div className="add-article">
              <DisplayButton title={props.language.admin.addArticle} click={handleClickDisplayNewArticle}/>
              {displayNewArticle && <AddArticle hide={handleClickDisplayNewArticle} language={props.language}/>}
            </div>
          </div>
        </>
      }
    </div>
  </>
}