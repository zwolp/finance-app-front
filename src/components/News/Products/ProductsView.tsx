import React, { useState, useEffect } from "react";
import { ProductRow } from "./ProductRow/ProductRow";
import { Product } from "types";
import { Loading } from "../../../components/common/Loading/Loading";
import { Error } from "../../../components/common/Error/Error";
import "./ProductsView.scss"
import { apiUrl } from "../../../config/api";

type Props = {
  language: any,
}

export const ProductView = (props: Props) => {
  const [products, setProducts] = useState<Product[] | []>([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getProducts = async () => {
    try {
      const res = await fetch(apiUrl + '/product');
      const data = await res.json();
      setProducts(data)
      setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    getProducts();
  }, [])
  
  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <Error>{props.language.error}</Error>
  }
  return (
    <ul className="Products">
      {products.length > 0 ?
        products.map(product => <li key={product.id} className="product"><ProductRow product={product} language={props.language}/></li>) :
        <p>{props.language.productList.emptylist}</p>
      }
    </ul>
  )
}