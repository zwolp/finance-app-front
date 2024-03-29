import React, { useState } from "react";
import { apiUrl } from "../../../config/api";

type Props = {
  financeId: string,
  value: number,
  valueName: string,
  title: string,
  buttonTitle: string,
}

export const ChangePanelRow = (props: Props) => {
  const [changeValue, setChangeValue] = useState(props.value)

  const handleClick = async (valueName: string, value: number) => {
    if (value < 0) {
      return
    }

    await fetch(apiUrl + '/finance/' + props.financeId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({[valueName]: value})
    })
    window.location.reload();
  }

  return <div className="ChangePanelRow">
    <label>
      <p>{props.title}</p>
      <div className="container">
        <input 
          type="number" 
          value={changeValue} 
          onChange={(e) => {setChangeValue(Number(e.target.value))}}
        />
        <button 
          onClick={() => {handleClick(props.valueName, changeValue)}}
        >
          {props.buttonTitle}
        </button>
      </div>
    </label>
  </div>
}