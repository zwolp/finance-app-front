import React, { useState } from "react";
import { AddProduct } from "../../components/AdminPanel/AddProduct/AddProduct";
import { AddArticle } from "../../components/AdminPanel/AddArticle/AddArticle";
import { DisplayButton } from "../../components/AdminPanel/DisplayButton/DisplayButton";
import { CurrentProducts } from "../../components/AdminPanel/CurrentProducts/CurrentProducts";
import { CurrentArticles } from "../../components/AdminPanel/CurrentArticles/CurrentArticles";
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import './AdminPanel.scss'

export const AdminPanel = () => {
  const [showProducts, setShowProducts] = useState(false);
  const [buttonText, setButtonText] = useState('Produkty');
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
      setButtonText('Produkty');
    } else {
      setShowProducts(true);
      setButtonText('Artykuły');
    }
  }

  return <>
    <ViewTitle title="Panel Administratora"/>
    <div className="AdminPanel">
      <button className="show-products" onClick={handleShowProducts}>{buttonText}</button>
      {
        showProducts ? <>
          <div className="container">
            <CurrentProducts/>
            <div className="add-product">
              <DisplayButton title="Dodaj produkt" click={handleClickDisplayNewProduct}/>
              {displayNewProduct && <AddProduct hide={handleClickDisplayNewProduct}/>}
            </div>
          </div>
        </> : <>
          <div className="container">
            <CurrentArticles/>
            <div className="add-article">
              <DisplayButton title="Dodaj artukuł" click={handleClickDisplayNewArticle}/>
              {displayNewArticle && <AddArticle hide={handleClickDisplayNewArticle}/>}
            </div>
          </div>
        </>
      }
    </div>
  </>
}