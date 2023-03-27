import { ChangePanelRow } from "./ChangePanelRow";

type Props = {
  financeId: string,
  salary: number,
  monthlyExpanses: number,
  savings: number,
}

export const ChangePanel =  (props: Props) => {
  return <div className="ChangePanel">
    <ChangePanelRow financeId={props.financeId} title="Miesięczne zarobki" value={props.salary} valueName="salary"/>
    <ChangePanelRow financeId={props.financeId} title="Miesięczne wydatki" value={props.monthlyExpanses} valueName="monthlyExpanse"/>
    <ChangePanelRow financeId={props.financeId} title="Oszczędności" value={props.savings} valueName="savings"/>
  </div>
}