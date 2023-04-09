import React, { useEffect, useState } from "react";
import { Loading } from "../../common/Loading/Loading";
import { Error } from "../../common/Error/Error"
import { Product } from "types";
import { CurrentProductRow } from "./CurrentProductRow";
import './CurrentProducts.scss'

export const CurrentProducts = () => {
  const [list, setList] = useState<Product[] | []>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
    handleProducts()
  }, [])

  if (loading) {
    return <Loading/>
  }
  if (error) {
    return <Error>Przepraszamy, wystąpił błąd</Error>
  }
  if (list.length === 0) {
    return <p>Nie dodano jeszcze produktów</p>
  }
  return <ul className="CurrentProducts">
    {list.map((obj, i) => {
      return <li key={i}><CurrentProductRow product={obj}/></li>
    })}
  </ul>
}