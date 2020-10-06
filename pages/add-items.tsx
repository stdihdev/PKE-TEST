import React, {useEffect, useState} from "react";
import Router from 'next/router'
import {MainLayout} from "../components/MainLayout";
import {ShirtColorType} from "../components/__generated__/types";
import {useCreateShirt} from "../components/shirt/mutations/__generated__/CreateShirt";
import {All_shirtsDocument} from "../components/shirt/queries/__generated__/All_shirts";


export default function AddItems() {
  const [valuesShirt, setValuesShirt] = useState<any>({})
  const [valuesPants, setValuesPants] = useState<any>({})
  const [colors, setColors] = useState([])
  useEffect(() => {
    setColors(Object.keys(ShirtColorType));
  }, [])
  const [createShirt] = useCreateShirt(
    {
    refetchQueries: [
      {
        query: All_shirtsDocument,
      }
    ]
  }
  )
  const handleChangeShirt = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target
    setValuesShirt({...valuesShirt, [name]: value})
  }
  const handleChangePants = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setValuesPants({...valuesPants, [name]: value})
  }
  console.log("valuesShirt", valuesShirt)
  console.log("valuesPants", valuesPants)
  const linkClickHandler = () => {
    Router.push('/')
  }
  const variablesShirt = {
    name: valuesShirt.name,
    size: Number(valuesShirt.size),
    color: String(valuesShirt.color)?.toUpperCase() as ShirtColorType,
  }
  const linkClickSubmitHandlerShirt = () => {
    createShirt({
      variables: variablesShirt
    })
  }
  const linkClickSubmitHandlerPants = () => {
    Router.push('/')
  }

  return (
    <MainLayout>
      <button onClick={linkClickHandler}>Go back to home</button>
      <section>
        <div>
          <label>name</label>
          <input type="text" name="name" onChange={handleChangeShirt}/>
          <label>size</label>
          <input type="number" name="size" onChange={handleChangeShirt}/>
          <select name="color" onChange={handleChangeShirt}>
            {colors.map(col =>
              <option key={col} value={col}>{col}</option>
            )}
          </select>
          <button disabled={!valuesShirt.color || !valuesShirt.size} onClick={linkClickSubmitHandlerShirt}>Add
          </button>
        </div>
        <div >
          <label>name</label>
          <input type="text" name="name" onChange={handleChangePants}/>
          <label>color</label>
          <input type="text" name="color" onChange={handleChangePants}/>
          <label>W</label>
          <input type="number" name="w" onChange={handleChangePants}/>
          <label>L</label>
          <input type="number" name="l" onChange={handleChangePants}/>
          <button disabled={!valuesPants.color || !valuesPants.w || !valuesPants.l}
                  onClick={linkClickSubmitHandlerPants}>Add
          </button>
        </div>
      </section>
    </MainLayout>
  )
}