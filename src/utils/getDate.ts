export const getDate = (date: string): string => {
  const dateObj = new Date(date)
  return dateObj.toLocaleDateString()
}

export const endDate = (startDate: string, durationInDays: number) => {
  const date = new Date(startDate).getTime();
  const days = durationInDays * 24 * 60 * 60 * 1000;
  return new Date(date + days)/* .toLocaleDateString() */
}

export const currentDateToSend = (date: Date): string => {
  const year = `${date.getFullYear()}-`
  const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}-` : `${date.getMonth() + 1}-`
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
  return year + month + day;
}
  /**
 * Return the time period or null
 * @param time difference in milliseconds you want to convert
 * @param period the time period you want, you can choose day, month or year (default month)
 */
export const getDifference = (time: number, period: string = 'month') => {
  const day = time / (1000 * 3600 * 24);
  switch (period) {
    case 'day':
      return Math.floor(day);
    case 'month':
      return Math.floor(day / 30.42);
    case 'year':
      return Math.floor(day / 365);
      default:
        return 0;
  }
} 