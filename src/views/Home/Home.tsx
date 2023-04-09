import React from "react";
import { ViewTitle } from "../../components/common/ViewTitle/ViewTitle";
import './Home.scss'

export const Home = () => {
  return <>
      <ViewTitle title="Planer finansowy"/>
      <div className="Home">
        <p className="greeting">Witamy w aplikacji do planowania inwestycji</p>
        <div className="photo"/>
      </div>
    </>
}