import {useAll_shirts} from "./queries/__generated__/All_shirts";
import {ShirtColorType} from "../__generated__/types";
import React from "react";
import Router from "next/router";

export const ShirtList = () => {
  const {loading, error, data} = useAll_shirts()
  if (loading || !data) return <div>Loading...</div>
  const {All_shirts} = data
  const colorsK = Object.keys(ShirtColorType);
  const colorsV = Object.values(ShirtColorType);
  colorsK.map(c => console.log(c))
  colorsV.map(c => console.log(c))

  const linkClickHandler = (id) => {

  }

  return (
    <section>
      <h3>All Shirts</h3>
      <table>
        <caption>Shirts</caption>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Color</th>
          <th>Size</th>
          <th>Action</th>
        </tr>
        {All_shirts.map(shirt => (
          <tr key={shirt.id}>
            <td>{shirt.id}</td>
            <td>{shirt?.name}</td>
            <td>{shirt.color}</td>
            <td>{shirt.size}</td>
            <td>
              <button onClick={() => linkClickHandler(shirt.id)}>Delete</button>
            </td>
          </tr>
        ))}
        {/*<tr>*/}
        {/*  <td>...</td>*/}
        {/*</tr>*/}

      </table>
    </section>
  )
}