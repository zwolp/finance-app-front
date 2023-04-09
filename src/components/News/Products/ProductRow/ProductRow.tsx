import React from "react";
import { Product } from "types";

type Props = {
  product: Product
}

export const ProductRow = (props: Props) => {
  return <>
    <h4 className="product-name">
      {props.product.name}
    </h4>
    <p className="product-annual-interest-rate">
      <span>Oprocentowanie:</span> {props.product.annualInterestRate} % / rok
    </p>
    <p className="product-duration">
      <span>Okres trwania:</span> {props.product.durationInDays} dni
    </p>
    <p className="product-resources">
      <span>Wkład finansowy:</span> od {props.product.minContribution} zł do {props.product.maxContribution} zł
    </p>
    <p className="product-description">
      {props.product.description}
    </p>
  </>
}