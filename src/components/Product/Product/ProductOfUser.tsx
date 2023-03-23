import React, { useEffect, useState } from "react";/* 
import { Product } from "../../../types/Product"; */
import { Product } from "types"
import { FinancialOperations } from "../../../utils/financeOperation";
import { endDate, getDate } from "../../../utils/getDate";
import { Loading } from "../../common/Loading/Loading";
import { DeleteProductButton } from "../FinanceProduct/DeleteProductButton";

type Props = {
  productId: string,
  financeId: string,
  startDate: string,
  resources: number,
  userSavings: number,
}

export const ProductOfUser = (props: Props) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/product/' + props.productId);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [props.productId]);
  
  if (!product) {
    return <Loading/>
  }
  return <>
    <div className="product">
      <p>{product.name}</p>
      <p>Produkt finansowy założony w dniu {getDate(props.startDate)}, planowane zakończenie {endDate(props.startDate, product.durationInDays)}</p>
      <p>Wkład finansowy {props.resources}</p>
      <p>Oczekiwany zysk {FinancialOperations.depositProfit(props.resources, product.durationInDays, product.annualInterestRate).toFixed(2)}</p>
    </div>
    <DeleteProductButton productId={props.productId} financeId={props.financeId} resources={props.resources} userSavings={props.userSavings}/>
  </>
}