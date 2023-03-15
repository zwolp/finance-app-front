import { User } from "../../../types/User";

type Props = {
  user: User;
}

export const UserRecordPersonal = (props: Props) => {
    return <div className="personalInfo">
      <p className="user-name">{props.user.name} {props.user.surname}</p>
      <p className="user-job">{props.user.job}</p>
    </div>
}