import React, { useEffect, useState } from "react";
import { Product } from "types"
import { FinancialOperations } from "../../../utils/financeOperation";
import { currentDateToSend, endDate } from "../../../utils/getDate";
import { Loading } from "../../common/Loading/Loading";
import { DeleteProductButton } from "../FinanceProduct/DeleteProductButton";

type Props = {
  id: string,
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
      <p><span>{product.name}</span></p>
      <p>Produkt finansowy założony w dniu <span>{currentDateToSend(new Date(props.startDate))}</span>, planowane zakończenie <span>{currentDateToSend(endDate(new Date(props.startDate), product.durationInDays))}</span></p>
      <p><span>Wkład finansowy</span> {props.resources}</p>
      <p><span>Oczekiwany zwrot</span> {FinancialOperations.depositProfit(props.resources, product.durationInDays, product.annualInterestRate) + props.resources}</p>
    </div>
    <DeleteProductButton id={props.id} productId={props.productId} financeId={props.financeId} resources={props.resources} userSavings={props.userSavings}/>
  </>
}