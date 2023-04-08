import React, { useEffect, useState } from "react";
import { Error } from "../../common/Error/Error";
import { Product } from "types";
import { Loading } from "../../common/Loading/Loading";
import { ProductRow } from "./ProductRow";

type Props = {
  financeId: string,
  savings: number,
  monthlyExpanse: number,
};

export const ProductList = (props: Props) => {
  const [list, setList] = useState<Product[]>([])
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleProducts = async () => {
    try {
    const res = await fetch('http://localhost:3001/product/');
    const data = (await res.json()) as Product[];
    setList(data)
    setLoading(false)
    } catch (e) {
      console.log(e);
      setLoading(false)
      setError(true)
    }
  }

  useEffect(() => {
    handleProducts();
  }, []);

  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <Error>Przepraszamy, wystąpił błąd</Error>
  }
  if (list.length === 0) {
    return <p>Chwilowo nie ma dostępnych produktów, spróbuj później</p>
  }
  return <ul className="productsList">
    {list.map((obj, i) => {
    return <ProductRow key={i} financeId={props.financeId} product={obj} savings={props.savings} monthlyExpanse={props.monthlyExpanse}/>})}
  </ul>
}