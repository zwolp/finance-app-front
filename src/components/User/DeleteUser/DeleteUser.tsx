import React from "react";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string,
}

export const DeleteUser = (props: Props) => {
  const navigate = useNavigate();
  const deleteUser = async (id: string) => {
    try {
      const res = await fetch('http://localhost:3001/user/' + id, {
        method: 'Delete'
      })
      if (res.status === 200) {
        navigate(-1);
      }
    } catch (e) {
      console.log(e);
    };
  };
  return <div className="DeleteUser">
    <button onClick={() => deleteUser(props.id)}>Usuń użytkownika</button>
  </div>
}