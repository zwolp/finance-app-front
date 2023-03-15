import React, { useState } from "react";

/* type Props = {
  productId: string,
  minContribution: number,
  maxContribution: number,
  func: any,
} */

export const AddPanel = () => {
  const [value, setValue] = useState(0)

  return (
    <input 
      name="kwota"
      type="number"
      value={value}
      onChange={e => setValue(Number(e.target.value))}
      />
  )
}