import React, { SyntheticEvent, useState } from "react";
import './AddUserForm.scss'
import { apiUrl } from "../../../config/api"

type Props = {
  language: any,
}

export const AddUserForm = (props: Props) => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    job: '',
  })
  
  const saveUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(apiUrl + '/user/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (res.status === 200) {
        await window.location.reload()
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
      <div className="AddUserForm">
        <h3 className="form-title">{props.language.addUserForm.title}</h3>
        <form onSubmit={saveUser}>
          <label>
            <p>{props.language.addUserForm.name}</p>
            <input className="form-input" type="text" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
          </label>
          <label>
            <p>{props.language.addUserForm.surname}</p>
            <input className="form-input" type="text" value={user.surname} onChange={e => setUser({...user, surname: e.target.value})}/>
          </label>
          <label>
            <p>{props.language.addUserForm.job}</p>
            <input className="form-input" type="text" value={user.job} onChange={e => setUser({...user, job: e.target.value})}/>
          </label>
          <input type="submit" className="button" value={props.language.addUserForm.formButton}/>
        </form>
      </div>
  )
}