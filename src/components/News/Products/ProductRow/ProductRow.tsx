import React from "react";
import { Product } from "types";

type Props = {
  product: Product
}

export const ProductRow = (props: Props) => {
  return (
  <div className="new-product article">
    <h4 className="new-product-name">
      {props.product.name}
    </h4>
    <p className="new-product-annual-interest-rate">
      {props.product.annualInterestRate} % w skali roku
    </p>
    <p className="new-product-duration">
      {props.product.durationInDays} dni
    </p>
    <p className="new-product-resources">
      od {props.product.minContribution} zł do {props.product.maxContribution} zł 
    </p>
    <p className="new-product-description article-description">
      {props.product.description}
    </p>
  </div>
  )
}