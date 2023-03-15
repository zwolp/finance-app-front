export type UserPersonal = {
  id: string,
  name: string,
  surname: string,
  job: string,
}

export type Finance = {
  monthlyExpanse: number;
  salary: number;
  savings: number;
}

export type User = {
    name: string,
    surname: string,
    job: string,
    financeId: string | null,
}

export type financeProductRecord = {
  id: number,
  financeId: string,
  productId: string,
  startDate: string,
  resources: number,
}