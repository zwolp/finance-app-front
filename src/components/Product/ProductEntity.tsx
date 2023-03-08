import React, { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { FinancialOperations } from "../../utils/financeOperation";
import { endDate, getDate } from "../../utils/getDate";

type Props = {
  id: string,
  startDate: string,
  resources: number,
}

export const ProductEntity = (props: Props) => {
  const [product, setProduct] = useState<Product>({
    id: '',
    name: '',
    annualInterestRate: 0,
    durationInDays: 0,
    minContribution: 0,
    maxContribution: 0,
    description: '',
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('http://localhost:3001/product/' + props.id);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    })()
  }, [props.id])
/* Kwota zdeponowana x ilość dni utrzymywania lokaty x oprocentowanie w skali roku / 365 dni */
  return <>
    <div className="product">
      <p>{product.name}</p>
      <p>Produkt finansowy założony w dniu {getDate(props.startDate)}, planowane zakończenie {endDate(props.startDate, product.durationInDays)}</p>
      <p>Wkład finansowy {props.resources}</p>
      <p>Oczekiwany zysk {FinancialOperations.depositProfit(props.resources, product.durationInDays, product.annualInterestRate).toFixed(2)}</p>
      {/* <p>{product.annualInterestRate}</p> */}
      {/* <p>Minimum {product.minContribution}zł, maksimum {product.maxContribution}zł</p> */}
      {/* <p>{product.description}</p> */}
    </div>
    <button>Zrezygnuj</button>
  </>
}