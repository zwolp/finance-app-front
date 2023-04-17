import React, { useState } from "react";
import { Product } from "types";
import './CurrentProductRow.scss'

type Props = {
  product: Product,
  language: any,
}

export const CurrentProductRow = (props: Props) => {
  const [info, setInfo] = useState('');
  const [displayDescription, setDisplayDescription] = useState(false);
  const [buttonText, setButtonText] = useState(props.language.currentProducts.showDescription);
  const showText = props.language.currentProducts.showDescription;
  const hideText = props.language.currentProducts.hideDescription;

  const display = () => {
    if (displayDescription) {
      setDisplayDescription(false);
      setButtonText(showText);
    } else {
      setDisplayDescription(true);
      setButtonText(hideText);
    }
  }
  const checkUsedProduct = async (id: string) => {
    try {
      const res = await fetch('http://localhost:3001/finance-product/used/' + id);
      const data = await res.json() as {financeId: string}[];
      if (data.length === 0) {
        console.log([true, id]);
        return [true, id];
      }
      console.log([false, data]);
      return [false, data]
    } catch (e) {
      console.log(e);
      setInfo(props.language.error)
    }
  }
  const deleteProduct = async (product: Product) => {
    try {
      await fetch('http://localhost:3001/product/', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product)
      })
    } catch (e) {
      console.log(e);
      setInfo(props.language.error)
    }
  }

  const handleDeleteButton = async () => {
    const confirm = window.confirm(`${props.language.currentProducts.hideDescription} ${props.product.name}?`);
    const check = await checkUsedProduct(props.product.id) as [boolean, {financeId: string}[]];
    if (confirm && check[0]) {
      await deleteProduct(props.product);
      return setInfo(`${props.language.product} ${props.product.id} ${props.language.currentProducts.deleted}`);
    }
    const financeIdArr = check[1].map(el => ' ' + el.financeId);
    return setInfo(`${props.language.currentProducts.usedProduct} ${financeIdArr}`);
  }

  return <div className="CurrentProductRow">
    <p><span>{props.language.currentProducts.productName}</span> {props.product.name}</p>
    <p><span>{props.language.productRow.interestRate}</span> {props.product.annualInterestRate} %</p>
    <p><span>{props.language.productRow.period} ({props.language.productRow.days})</span> {props.product.durationInDays}</p>
    <p><span>{props.language.productOfUser.deleted}</span> {props.product.minContribution} - {props.product.maxContribution}</p>
    {displayDescription && <p>{props.product.description}</p>}
    <div className="button-container">
      <button onClick={handleDeleteButton}>{props.language.delete}</button>
      <button onClick={display}>{buttonText}</button>
    </div>
    <p className="info">{info}</p>
  </div>
}