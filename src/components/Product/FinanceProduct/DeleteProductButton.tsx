import React from "react";
import { apiUrl } from "../../../config/api";

type Props = {
  id: string,
  financeId: string,
  productId: string,
  resources: number,
  userSavings: number,
}

export const DeleteProductButton = (props: Props) => {

  const deleteProduct = async () => {
    try {
    await fetch(apiUrl + '/finance-product/' + props.id, {
      method: 'DELETE',
    })
    } catch (e) {
      console.log(e);
    };
  };
  const changeSavings = async (body: {savings: number}) => {
    try {
      await fetch(apiUrl + '/finance/' + props.financeId, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
    } catch (e) {
      console.log(e);
    }
    return true
  }

  const handleClick = async () => {
    const confirm = window.confirm(`Czy na pewno chcesz usunąć ten produkt?`)
    if (confirm) {
      await deleteProduct();
      await changeSavings({savings: props.userSavings + props.resources})
      window.location.reload();
    };
    return
  };

  return (
    <button 
      className="DeleteProductButton"
      onClick={handleClick}
      >
      Zrezygnuj
    </button>
  )
};