import React, { SyntheticEvent, useState } from "react";

type Props = {
  id: string | undefined,
}

export const AddFinanceForm = (props: Props) => {
  const [finance, setFinance] = useState({
    salary: '',
    savings: '',
    monthlyExpanse: '',
  })

  const saveFinanse = async (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(finance);
    try {
      const res = await fetch('http://localhost:3001/finance/' + props.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(finance)
      });

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return <>
    <div className="form-container">  
      <form onSubmit={saveFinanse}>
        <label>
          <p>Miesięczna wypłata</p>
          <input type="number" value={finance.salary} onChange={e => {setFinance({...finance, salary: e.target.value})}}/>
        </label>
        <label>
          <p>Oszczędności</p>
          <input type="number" value={finance.savings} onChange={e => {setFinance({...finance, savings: e.target.value})}}/>
        </label>
        <label>
          <p>Miesięczne wydatki</p>
          <input type="number" value={finance.monthlyExpanse} onChange={e => {setFinance({...finance, monthlyExpanse: e.target.value})}}/>
        </label>
        <input type="submit" className="btn"/>
      </form>
    </div>
  </>
}
