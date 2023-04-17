import React from "react";
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import './Home.scss'

type Props = {
  language: any,
}

export const Home = (props: Props) => {
  return <>
      <ViewTitle title={props.language.home.title}/>
      <div className="Home">
        <p className="greeting">{props.language.home.greeting}</p>
        <div className="photo"/>
      </div>
    </>
}