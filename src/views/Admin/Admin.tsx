import React, { useState } from "react";

export const Admin = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [hiddenPassword, setHiddenPassword] = useState(true);
  const [hiddenButtonText, setHiddenButtonText] = useState('Pokaż hasło');

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, password);
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

  return <div className="Admin">
    <form onSubmit={handleForm}>
      <label>
        <p>Nazwa użytkownika</p>
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)}/>
      </label>
      <label>
        <p>Hasło</p>
        <input type={hiddenPassword ? "password" : "text"} name="password" value={password} onChange={e => setPassword(e.target.value)}/>
      </label>
      <input type="submit"/>
    </form>
    <button onClick={showPassword}>{hiddenButtonText}</button>
  </div>
}