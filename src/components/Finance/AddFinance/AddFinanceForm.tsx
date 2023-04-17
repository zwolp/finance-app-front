import React, { SyntheticEvent, useState } from "react";
import './AddFinance.scss'
import { apiUrl } from "../../../config/api";

type Props = {
  id: string | undefined,
  language: any,
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
      const res = await fetch(apiUrl + '/finance/' + props.id, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(finance)
      });

      if (res.status === 200) {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
  }

  return <>
    <div className="form-container">  
      <form onSubmit={saveFinanse}>
        <label>
          <p>{props.language.financeRecord.earnings}</p>
          <input type="number" value={finance.salary} onChange={e => {setFinance({...finance, salary: e.target.value})}}/>
        </label>
        <label>
          <p>{props.language.savings}</p>
          <input type="number" value={finance.savings} onChange={e => {setFinance({...finance, savings: e.target.value})}}/>
        </label>
        <label>
          <p>{props.language.financeRecord.expanses}</p>
          <input type="number" value={finance.monthlyExpanse} onChange={e => {setFinance({...finance, monthlyExpanse: e.target.value})}}/>
        </label>
        <input type="submit" className="button" value={props.language.addUserForm.formButton}/>
      </form>
    </div>
  </>
}
