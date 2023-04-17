import React, { SyntheticEvent, useState } from "react";
import { ProductWithoutId } from "types";
import './AddProduct.scss';
import { apiUrl } from "../../../config/api";

const obj: ProductWithoutId = {
  name: '',
  annualInterestRate: 0,
  durationInDays: 0,
  minContribution: 0,
  maxContribution: 0,
  description: '',
}

type Props = {
  hide: () => void,
  language: any,
}

export const AddProduct = (props: Props) => {
  const [product, setProduct] = useState(obj)

   const saveProduct = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(product);
    try {
      const res = await fetch(apiUrl + '/product/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
      });
      console.log(res);
      if (res.status === 200) {
        setProduct(obj);
        props.hide()
      }
    } catch (e) {
      console.log(e);
    }
  }

  return <div className="AddProduct">
  <form>
    <h4>{props.language.addProduct.newProduct}</h4>
    <label>
      <p>{props.language.currentProducts.productName}</p>
      <input 
        className="name"
        type="text" 
        name="name" 
        required
        value={product.name} 
        onChange={e => setProduct({...product, name: e.target.value})}
      />
    </label>
    <label>
      <p>{props.language.productRow.interestRate}</p>
      <input 
        type="number" 
        name="annualInterestRate" 
        required
        value={product.annualInterestRate} 
        onChange={e => setProduct({...product, annualInterestRate: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>{props.language.productRow.period} ({props.language.productRow.days})</p>
      <input 
        type="number" 
        name="durationDays" 
        required
        value={product.durationInDays} 
        onChange={e => setProduct({...product, durationInDays: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>{props.language.addProduct.minContribution}</p>
      <input 
        type="number" 
        name="minContribution" 
        required
        value={product.minContribution} 
        onChange={e => setProduct({...product, minContribution: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>{props.language.addProduct.maxContribution}</p>
      <input 
        type="number" 
        name="maxContribution" 
        value={product.maxContribution} 
        required
        onChange={e => setProduct({...product, maxContribution: Number(e.target.value)})}
      />
    </label>
    <label className="description">
      <p>{props.language.description}</p>
      <textarea 
        name="description" 
        cols={30} 
        rows={10} 
        value={product.description} 
        required
        onChange={e => setProduct({...product, description: e.target.value})}
      />
    </label>
    <button className="button" onClick={saveProduct}>
    {props.language.addUserForm.formButton}</button>
  </form>
</div>
}