import React, { useEffect, useState } from "react";
import { Product } from "../../../types/Product";
import { Loading } from "../../common/Loading/Loading";
import { ProductRow } from "./ProductRow";

type Props = {
  financeId: string,
};

export const ProductList = (props: Props) => {
  const [list, setList] = useState<Product[]>([])

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
    {list.map(obj => <ProductRow key={obj.id} product={obj} financeId={props.financeId}/>)}
  </ul>
}