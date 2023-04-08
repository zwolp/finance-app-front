import React, { SyntheticEvent, useState } from "react";
import { ProductWithoutId } from "types";

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
}

export const AddProduct = (props: Props) => {
  const [product, setProduct] = useState(obj)

   const saveProduct = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(product);
    try {
      const res = await fetch('http://localhost:3001/product/', {
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
    <h4>Nowy produkt</h4>
    <label>
      <p>Nazwa produktu:</p>
      <input 
        type="text" 
        name="name" 
        required
        value={product.name} 
        onChange={e => setProduct({...product, name: e.target.value})}
      />
    </label>
    <label>
      <p>Roczne oprocentowanie:</p>
      <input 
        type="number" 
        name="annualInterestRate" 
        required
        value={product.annualInterestRate} 
        onChange={e => setProduct({...product, annualInterestRate: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>Czas trwania produktu: (wyrażony w dniach)</p>
      <input 
        type="number" 
        name="durationDays" 
        required
        value={product.durationInDays} 
        onChange={e => setProduct({...product, durationInDays: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>Minimalny wkład:</p>
      <input 
        type="text" 
        name="minContribution" 
        required
        value={product.minContribution} 
        onChange={e => setProduct({...product, minContribution: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>Maksymalny wkład:</p>
      <input 
        type="text" 
        name="maxContribution" 
        value={product.maxContribution} 
        required
        onChange={e => setProduct({...product, maxContribution: Number(e.target.value)})}
      />
    </label>
    <label>
      <p>Opis produktu:</p>
      <textarea 
        name="description" 
        cols={30} 
        rows={10} 
        value={product.description} 
        required
        onChange={e => setProduct({...product, description: e.target.value})}
      />
    </label>
    <input type="submit" value="zapisz" onClick={saveProduct}/>
  </form>
</div>
}