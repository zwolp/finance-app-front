import React, { useState } from "react";

type Props = {
  financeId: string,
  value: number,
  valueName: string,
  title: string,
}

export const ChangePanelRow = (props: Props) => {
  const [changeValue, setChangeValue] = useState(props.value)

  const handleClick = async (valueName: string, value: number) => {
    if (value < 0) {
      return
    }

    await fetch('http://localhost:3001/finance/' + props.financeId, {
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
      <input 
        type="number" 
        value={changeValue} 
        onChange={(e) => {setChangeValue(Number(e.target.value))}}
      />
      <button 
        onClick={() => {handleClick(props.valueName, changeValue)}}
      >
        zapisz
      </button>
    </label>
  </div>
}