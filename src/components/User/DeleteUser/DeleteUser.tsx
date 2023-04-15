import React from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../../../config/api";

type Props = {
  id: string,
  name: string,
}

export const DeleteUser = (props: Props) => {
  const navigate = useNavigate();
  const deleteUser = async (id: string) => {
    const confirm = window.confirm(`Czy na pewno chcesz usunąć użytkownika ${props.name}?`)
    if (confirm) {
      try {
        const res = await fetch(apiUrl + '/user/' + id, {
          method: 'Delete'
        })
        if (res.status === 200) {
          navigate(-1);
        }
      } catch (e) {
        console.log(e);
      };
    }
  };
  return <div className="DeleteUser">
    <button onClick={() => deleteUser(props.id)}>Usuń użytkownika</button>
  </div>
}