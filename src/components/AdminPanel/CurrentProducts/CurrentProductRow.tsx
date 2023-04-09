import React, { useState } from "react";
import { Product } from "types";
import './CurrentProductRow.scss'

type Props = {
  product: Product,
}

export const CurrentProductRow = (props: Props) => {
  const [info, setInfo] = useState('');
  const [displayDescription, setDisplayDescription] = useState(false);
  const [buttonText, setButtonText] = useState('Pokaż opis');
  const showText = 'Pokaż opis';
  const hideText = 'Ukryj opis';

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
      setInfo('Przepraszamy wystąpił błąd, spróbuj później')
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
      setInfo('Przepraszamy wystąpił błąd, spróbuj później')
    }
  }

  const handleDeleteButton = async () => {
    const confirm = window.confirm(`Czy na pewno chcesz trwale usunąć produkt ${props.product.name}?`);
    const check = await checkUsedProduct(props.product.id) as [boolean, {financeId: string}[]];
    if (confirm && check[0]) {
      await deleteProduct(props.product);
      return setInfo(`Produkt ${props.product.id} usunięty`);
    }
    const financeIdArr = check[1].map(el => ' ' + el.financeId);
    return setInfo(`Produkt używany przez finanse użytkowników${financeIdArr}`);
  }

  return <div className="CurrentProductRow">
    <p><span>Nazwa:</span> {props.product.name}</p>
    <p><span>Oprocentowanie roczne:</span> {props.product.annualInterestRate} %</p>
    <p><span>Czas trwania (dni):</span> {props.product.durationInDays}</p>
    <p><span>Wkład finansowy:</span> {props.product.minContribution} - {props.product.maxContribution}</p>
    {displayDescription && <p>{props.product.description}</p>}
    <div className="button-container">
      <button onClick={handleDeleteButton}>Usuń</button>
      <button onClick={display}>{buttonText}</button>
    </div>
    <p>{info}</p>
  </div>
}