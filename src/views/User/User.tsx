import React, { useEffect, useState } from "react";

export const User = () => {
  const [user, setUser] =useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`http://localhost:3001/user/12345`);
        const data = await res.json();
        setUser(data)
      } catch (err) {
        console.log(err);
      }
    })();
  })

  return <>
    <h2>{user}</h2>
  </>
}