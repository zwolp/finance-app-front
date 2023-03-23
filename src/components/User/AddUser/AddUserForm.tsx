import React, { SyntheticEvent, useState } from "react";
import './AddUserForm.scss'

export const AddUserForm = () => {
  const [user, setUser] = useState({
    name: '',
    surname: '',
    job: '',
  })
  
  const saveUser = async (e: SyntheticEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/user/add', {
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
    <div className="position-fixed-container">
      <div className="form-container">
        <h3 className="form-title">Dodaj użytkownika</h3>
        <form onSubmit={saveUser}>
          <label>
            <p>Imię:</p>
            <input className="form-input" type="text" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
          </label>
          <label>
            <p>Nazwisko:</p>
            <input className="form-input" type="text" value={user.surname} onChange={e => setUser({...user, surname: e.target.value})}/>
          </label>
          <label>
            <p>Praca:</p>
            <input className="form-input" type="text" value={user.job} onChange={e => setUser({...user, job: e.target.value})}/>
          </label>
          <input type="submit" className="btn"/>
        </form>
      </div>
    </div>
  )
}