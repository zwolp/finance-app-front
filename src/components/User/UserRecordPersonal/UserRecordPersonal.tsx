import './UserRecordPersonal.scss'
import {User} from "types"

type Props = {
  user: User;
}

export const UserRecordPersonal = (props: Props) => {
    return <div className="personal-info">
      <p className="user-name">{props.user.name} {props.user.surname}</p>
      <p className="user-job">{props.user.job}</p>
    </div>
}