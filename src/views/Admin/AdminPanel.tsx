import React, { useState } from "react";
import { AddProduct } from "../../components/AdminPanel/AddProduct/AddProduct";
import { AddArticle } from "../../components/AdminPanel/AddArticle/AddArticle";
import { DisplayButton } from "../../components/AdminPanel/DisplayButton/DisplayButton";
import { CurrentProducts } from "../../components/AdminPanel/CurrentProducts/CurrentProducts";
import { CurrentArticles } from "../../components/AdminPanel/CurrentArticles/CurrentArticles";

export const AdminPanel = () => {
  const [displayNewProduct, setDisplayNewProduct] = useState(false);
  const [displayNewArticle, setDisplayNewArticle] = useState(false);
  const [displayProducts, setDisplayProducts] = useState(false);
  const [displayArticles, setDisplayArticles] = useState(false);

  const handleClickDisplayNewProduct = () => {
    displayNewProduct ? setDisplayNewProduct(false) : setDisplayNewProduct(true)
  }
  const handleClickDisplayNewArticle = () => {
    displayNewArticle ? setDisplayNewArticle(false) : setDisplayNewArticle(true)
  }
  const handleClickDisplayProducts = () => {
    displayProducts ? setDisplayProducts(false) : setDisplayProducts(true)
  }
  const handleClickDisplayArticles = () => {
    displayArticles ? setDisplayArticles(false) : setDisplayArticles(true)
  }


  return <div className="AdminPanel">
    <div className="currentThings">
      <DisplayButton title="Produkty" click={handleClickDisplayProducts}/>
      {displayProducts && <CurrentProducts/>}
      <DisplayButton title="Artukuły" click={handleClickDisplayArticles}/>
      {displayArticles && <CurrentArticles/>}
    </div>
    <div className="addPanel">
      <DisplayButton title="Dodaj produkt" click={handleClickDisplayNewProduct}/>
      {displayNewProduct && <AddProduct hide={handleClickDisplayNewProduct}/>}
      <DisplayButton title="Dodaj artukuł" click={handleClickDisplayNewArticle}/>
      {displayNewArticle && <AddArticle hide={handleClickDisplayNewArticle}/>}
    </div>
  </div>
}