import React, { useEffect, useState } from "react";
import { ForecastFinanceProductRecord } from "types";
import { currentDateToSend, endDate, getDifference } from "../../../utils/getDate";
import { ForecastSavings } from "./ForecastSavings/ForecastSavings";
import { ForecastProducts } from "./ForecastFinishedProducts/ForecastFinishedProducts";
import { FinancialOperations } from "../../../utils/financeOperation";

type Props = {
  salary: number,
  expanse: number,
  savings: number,
  financeId: string,
};

export const Forecast = (props: Props) => { 
  const [productsOfUser, setProductsOfUser] = useState<ForecastFinanceProductRecord[]>([]);
  const [finishedProducts, setFinishedProducts] = useState<ForecastFinanceProductRecord[] | []>([]);
  const [date, setDate] = useState(currentDateToSend(new Date()));
  const [monthDifference, setMonthDifference] = useState(0);
  const [displayForecast, setDisplayForecast] = useState(false);

  const getProductsOfUser = async () => {
    try {
      const res = await fetch('http://localhost:3001/finance/forecast/' + props.financeId);
      const data = await res.json();
      setProductsOfUser(data)
    } catch (e) {
      console.log(e);
    }
  }

  const handleDate = (date: string) => {
    setDate(date)
  };

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDisplayForecast(true);
  }

  useEffect(() => {
    getProductsOfUser();
    console.log('pobrano listę');
  },[props.financeId])

  useEffect(() => {    
    const currentDate = new Date();
    const forecastDate = new Date(date);
    setMonthDifference(getDifference((forecastDate.getTime() - currentDate.getTime())));
    if (productsOfUser.length > 0) {
      setFinishedProducts(productsOfUser.filter(product => forecastDate.getTime() >= (endDate(product.startDate, product.duration)).getTime()))
    }
    console.log(date, monthDifference);
    console.log(finishedProducts);
  }, [date])

  return <div className="Forecast">
    <form onSubmit={handleForm}>
      <input type="date" value={date} onChange={e => handleDate(e.target.value)}/>
      <input type="submit" value="Prognozuj"/>
    </form>

    {displayForecast && 
      <div>
        <ForecastSavings 
          title="Prognozowane oszczędności"
          expanse={props.expanse} 
          salary={props.salary}
          savings={props.savings}
          monthlyDifference={monthDifference}
          finishedProducts={finishedProducts}
          />
        { finishedProducts.length > 0 &&
          <ForecastProducts
            title="Zakończone produkty"
            finishedProducts={finishedProducts.map(product => ({
              name: product.name,
              endDate: currentDateToSend((endDate(product.startDate, product.duration))),
              profit: FinancialOperations.depositProfit(product.resources, product.duration, product.annualInterestRate)
            }))}
          />}  
      </div>}
  </div>
};