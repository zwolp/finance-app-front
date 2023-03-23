import React, { useState } from "react";

type Props = {
  financeId: string,
  salary: number,
  monthlyExpanses: number,
  savings: number,
}

export const ChangePanel =  (props: Props) => {
  const [salaryChange, setSalaryChange] = useState<number>(props.salary);
  const [monthlyExpanseChange, setmonthlyExpanseChange] = useState<number>(props.monthlyExpanses);
  const [savingsChange, setSavingsChange] = useState<number>(props.savings);

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

  return <>
    <label>
      <p>Miesięczne zarobki</p>
      <input 
        type="number" 
        value={salaryChange} 
        onChange={(e) => {setSalaryChange(Number(e.target.value))}}
      />
      <button 
        onClick={() => {handleClick('salary', salaryChange)}}
      >
        zapisz
      </button>
    </label>
    <label>
      <p>Miesięczne wydatki</p>
      <input 
        type="number"
        value={monthlyExpanseChange} 
        onChange={(e) => {setmonthlyExpanseChange(Number(e.target.value))}}
      />
      <button
        onClick={() => {handleClick('monthlyExpanse', monthlyExpanseChange)}}
      >
        zapisz
      </button>
    </label>
    <label>
      <p>Wolne oszczędności</p>
      <input 
        type="number"
        value={savingsChange} 
        onChange={(e) => {setSavingsChange(Number(e.target.value))}}
      />
      <button
        onClick={() => {handleClick('savings', savingsChange)}}
      >
        zapisz
      </button>
    </label>
  </>
}