import React, { useEffect, useState } from 'react'
import Router from 'next/router'
import { MainLayout } from '../components/MainLayout'
import { ShirtColorType } from '../components/__generated__/types'
import { useCreateShirt } from '../components/shirt/mutations/__generated__/CreateShirt'
import { All_shirtsDocument } from '../components/shirt/queries/__generated__/All_shirts'
import { useCreatePants } from '../components/pants/mutations/__generated__/CreatePants'
import { All_pantsDocument } from '../components/pants/queries/__generated__/All_pants'


export default function AddItems() {
  const [valuesShirt, setValuesShirt] = useState<any>({})
  const [valuesPants, setValuesPants] = useState<any>({})
  const [colors, setColors] = useState([])
  useEffect(() => {
    setColors(Object.keys(ShirtColorType))
  }, [])
  const [createShirt] = useCreateShirt(
    {
      refetchQueries: [
        {
          query: All_shirtsDocument
        }
      ]
    }
  )
  const [createPants] = useCreatePants(
    {
      refetchQueries: [
        {
          query: All_pantsDocument
        }
      ]
    }
  )

  const handleChangeShirt = (eS: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = eS.target
    setValuesShirt({ ...valuesShirt, [name]: value })
  }
  const handleChangePants = (eP: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = eP.target
    setValuesPants({ ...valuesPants, [name]: value })
  }

  const variablesShirt = {
    name: String(valuesShirt.name),
    size: Number(valuesShirt.size),
    color: String(valuesShirt.color)?.toUpperCase() as ShirtColorType
  }

  const variablesPants = {
    name: String(valuesPants.name),
    color: String(valuesPants.color),
    W: Number(valuesPants.W),
    L: Number(valuesPants.L)
  }

  const linkClickSubmitHandlerShirt = () => {
    createShirt({
      variables: variablesShirt
    }).finally(
      () => {
        setValuesShirt({})
      })
  }

  const linkClickSubmitHandlerPants = () => {
    createPants({
      variables: variablesPants
    }).finally(
      () => {
        setValuesPants({})
      })
  }

  return (
    <MainLayout>
      <section className="add-item">
        <div className="add-item__shirt">
          <h4>Shirt</h4>
          <label>name</label>
          <input value={valuesShirt.name} type="text" name="name" onChange={handleChangeShirt} />
          <label>size</label>
          <input value={Number(valuesShirt.size)} type="number" name="size" onChange={handleChangeShirt} />
          <select name="color" onChange={handleChangeShirt}>
            {colors.map(col =>
              <option key={col} value={col}>{col}</option>
            )}
          </select>
          <button onClick={linkClickSubmitHandlerShirt}>Add
          </button>
        </div>
        <div className="add-item__pants">
          <h4>Pants</h4>
          <label>name</label>
          <input value={valuesPants.name} type="text" name="name" onChange={handleChangePants} />
          <label>color</label>
          <input value={valuesPants.color} type="text" name="color" onChange={handleChangePants} />
          <label>W</label>
          <input value={Number(valuesPants.W)} type="number" name="W" onChange={handleChangePants} />
          <label>L</label>
          <input value={Number(valuesPants.L)} type="number" name="L" onChange={handleChangePants} />

          <button onClick={linkClickSubmitHandlerPants}>Add
          </button>

        </div>
      </section>
    </MainLayout>
  )
}
