import React from "react";
import Router from 'next/router'
import {MainLayout} from "../components/MainLayout";



export default function AddItems (){
  const linkClickHandler = () => {
    Router.push('/')
  }
  return(
    <MainLayout>
      <button onClick={linkClickHandler}>Go back to home</button>
    </MainLayout>
  )
}