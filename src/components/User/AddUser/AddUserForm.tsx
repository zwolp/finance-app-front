import React, { SyntheticEvent, useState } from "react";

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

      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <form onSubmit={saveUser}>
      <label>
        <p>Imię:</p>
        <input type="text" value={user.name} onChange={e => setUser({...user, name: e.target.value})}/>
      </label>
      <label>
        <p>Nazwisko:</p>
        <input type="text" value={user.surname} onChange={e => setUser({...user, surname: e.target.value})}/>
      </label>
      <label>
        <p>Praca:</p>
        <input type="text" value={user.job} onChange={e => setUser({...user, job: e.target.value})}/>
      </label>
      <input type="submit" />
    </form>
  )
}