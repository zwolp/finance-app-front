export const getDate = (date: string): string => {
  const dateObj = new Date(date)

  return dateObj.toLocaleDateString()
}

export const endDate = (startDate: string, durationInDays: number) => {
  const date = new Date(startDate).getTime();
  const days = durationInDays * 24 * 60 * 60 * 1000;
  return new Date(date + days).toLocaleDateString()
}

export const currentDateToSend = (date: Date): string => {
  const year = `${date.getFullYear()}-`
  const month = date.getMonth() < 9 ? `0${date.getMonth() + 1}-` : `${date.getMonth() + 1}-`
  const day = date.getDate() < 9 ? `0${date.getDate()}-` : `${date.getDate()}`
  return year + month + day;
}