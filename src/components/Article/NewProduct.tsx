import React from "react";

type Props = {
  date: string,
  title: string,
  name: string,
  annualInterestRate: number,
  durationInDays: number,
  minContribution: number,
  maxContribution: number,
  description: string,
}

export const NewProduct = (props: Props) => {
  return (
  <div className="new-product article">
    <p className="article-date">
      {props.date}
    </p>
    <h3 className="new-product-title article-title">
      {props.title}
    </h3>
    <p className="new-product-name">
      {props.name}
    </p>
    <p className="new-product-annual-interest-rate">
      {props.annualInterestRate} % w skali roku
    </p>
    <p className="new-product-duration">
      {props.durationInDays} dni
    </p>
    <p className="new-product-resources">
      od {props.minContribution} zł do {props.maxContribution} zł 
    </p>
    <p className="new-product-description article-description">
      {props.description}
    </p>
  </div>
  )
}