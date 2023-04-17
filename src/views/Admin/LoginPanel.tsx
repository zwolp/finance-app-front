import React, { useState } from "react";
import './LoginPanel.scss'
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import { apiUrl } from "../../config/api"

type Props = {
  handleLoggedAdmin: (isLogged: boolean) => void,
  language: any,
}

export const LoginPanel = (props: Props) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenButtonText, setHiddenButtonText] = useState(props.language.admin.showPassword);

  const checkAdmin = async () => {
    try {
      const res = await fetch(apiUrl + '/admin/login', {
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
      setHiddenButtonText(props.language.admin.hidePassword);
    } else {
      setHiddenPassword(true);
      setHiddenButtonText(props.language.admin.showPassword);
    }
  }

  return <>
    <ViewTitle title={props.language.admin.title}/>
    <div className="LoginPanel">
      <form onSubmit={handleForm}>
        <label>
          <p>{props.language.admin.name}:</p>
          <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
        </label>
        <label>
          <p>{props.language.admin.password}</p>
          <input type={hiddenPassword ? "password" : "text"} name="password" value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
        <div className="buttons">
          <div className="show-password" onClick={showPassword}>{hiddenButtonText}</div>
          <input type="submit" className="button" value={props.language.admin.formButton}/>
        </div>
      </form>
    </div>
  </>
}