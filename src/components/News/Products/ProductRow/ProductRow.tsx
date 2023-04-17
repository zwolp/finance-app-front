import React from "react";
import { Product } from "types";

type Props = {
  product: Product,
  language: any,
}

export const ProductRow = (props: Props) => {
  return <>
    <h4 className="product-name">
      {props.product.name}
    </h4>
    <p className="product-annual-interest-rate">
      <span>{props.language.productRow.interestRate}:</span> {props.product.annualInterestRate} % {props.language.productRow.perYear}
    </p>
    <p className="product-duration">
      <span>{props.language.productRow.period}</span> {props.product.durationInDays} {props.language.productRow.days}
    </p>
    <p className="product-resources">
      <span>{props.language.productRow.contribution}</span> {props.product.minContribution} zł - {props.product.maxContribution} zł
    </p>
    <p className="product-description">
      {props.product.description}
    </p>
  </>
}