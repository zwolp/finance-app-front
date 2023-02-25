import { User } from "../../../types/User";
import { Loading } from "../../common/Loading/Loading";

type Props = {
  user: User | null;
}

export const UserRecordPersonal = (props: Props) => {
  if (props.user) {
    return <>
      <p className="user-name">{props.user.name} {props.user.surname}</p>
      <p className="user-job">{props.user.job}</p>
    </>
  } else {
    return <Loading/>
  }
}