import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserRecordPersonal } from "../../components/User/UserRecordPersonal/UserRecordPersonal";
import { User } from "../../types/User";

export const SingleUser = () => {
  const [user, setUser] = useState<User | null>(null);

  const {id} = useParams()
  console.log(id);

  useEffect(() => {
    (async () => {
      const res = await fetch('http://localhost:3001/user/' + id);
      const data = await res.json();
      setUser(data);
    })();
  },[id]);

return <>
  <UserRecordPersonal user={user}/>
</>
}