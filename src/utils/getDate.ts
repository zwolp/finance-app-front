export const getDate = (date: string): string => {
  const dateObj = new Date(date)

  return dateObj.toLocaleDateString()
}

export const endDate = (startDate: string, durationInDays: number) => {
  const date = new Date(startDate).getTime();
  const days = durationInDays * 24 * 60 * 60 * 1000;
  return new Date(date + days).toLocaleDateString()
}