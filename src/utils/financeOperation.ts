export class FinancialOperations {
  /**
 * Return array with 
 * @param monthlyExpanses amount of monthly expenses
 * @param protectionTime the expected period of financial security given in months (default 6 months)
 */
  static financialCushion (monthlyExpanses: number, protectionTime: number = 6): number {
    return monthlyExpanses * protectionTime;
  };
  /* Kwota zdeponowana x ilość dni utrzymywania lokaty x oprocentowanie w skali roku / 365 dni */
  static depositProfit (resources: number, durationInDays: number, annualInterestRate: number): number {
    return Number((resources * durationInDays * ((annualInterestRate / 100) / 365)).toFixed(2));
  };
};