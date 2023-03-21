import React, { useEffect, useState } from "react";
import { Product } from "../../../types/Product";
import { Loading } from "../../common/Loading/Loading";
import { ProductRow } from "./ProductRow";

type Props = {
  financeId: string,
  userSavings: number,
};

export const ProductList = (props: Props) => {
  const [list, setList] = useState<Product[]>([])
/* 
  const handleClick = (obj: Product) => {
    console.log(obj);
  } */

  const handleProducts = async () => {
    try {
    const res = await fetch('http://localhost:3001/product');
    const data = await res.json()
    setList(data)
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    handleProducts();
  }, []);

  if (list.length === 0) {
    return <Loading/>
  }

  return <ul className="productsList">
    {list.map((obj, i) => {
    return <ProductRow key={i} financeId={props.financeId} product={obj} userSavings={props.userSavings}/>})}
  </ul>
}