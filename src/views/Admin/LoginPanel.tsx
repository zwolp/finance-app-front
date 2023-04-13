import React, { useState } from "react";
import './LoginPanel.scss'
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";

type Props = {
  handleLoggedAdmin: (isLogged: boolean) => void
}

export const LoginPanel = (props: Props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenButtonText, setHiddenButtonText] = useState('Pokaż hasło');

  const checkAdmin = async () => {
    try {
      const res = await fetch('http://localhost:3001/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          password
        })
      })
      const data = await res.json()
      props.handleLoggedAdmin(data)
    } catch (e) {
      console.log(e);
    }
  }

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    checkAdmin();
  }

  const showPassword = () => {
    if (hiddenPassword) {
      setHiddenPassword(false);
      setHiddenButtonText('Ukryj hasło');
    } else {
      setHiddenPassword(true);
      setHiddenButtonText('Pokaż hasło');
    }
  }

  return <>
    <ViewTitle title="Logowanie"/>
    <div className="LoginPanel">
      <form onSubmit={handleForm}>
        <label>
          <p>Nazwa:</p>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p>Hasło:</p>
          <input type={hiddenPassword ? "password" : "text"} name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="buttons">
          <div className="show-password" onClick={showPassword}>{hiddenButtonText}</div>
          <input type="submit" className="button"/>
        </div>
      </form>
    </div>
  </>
}