import { ChangePanelRow } from "./ChangePanelRow";

type Props = {
  financeId: string,
  salary: number,
  monthlyExpanses: number,
  savings: number,
  language: any,
}

export const ChangePanel =  (props: Props) => {
  return <div className="ChangePanel">
    <ChangePanelRow 
      financeId={props.financeId} 
      title={props.language.financeRecord.earnings}
      value={props.salary} 
      valueName="salary"
      buttonTitle={props.language.financeChanges.changeButton}
    />
    <ChangePanelRow 
      financeId={props.financeId} 
      title={props.language.financeRecord.earnings} 
      value={props.monthlyExpanses} 
      valueName="monthlyExpanse"
      buttonTitle={props.language.financeChanges.changeButton}
    />
    <ChangePanelRow 
      financeId={props.financeId} 
      title={props.language.financeRecord.savings} 
      value={props.savings} 
      valueName="savings"
      buttonTitle={props.language.financeChanges.changeButton}
    />
  </div>
}