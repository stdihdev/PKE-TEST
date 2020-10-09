import React, { useEffect, useState } from 'react'
import { Shirt, ShirtColorType, newShirt } from '../__generated__/types'
import { useCreateShirt } from './mutations/__generated__/CreateShirt'
import { All_shirtsDocument } from './queries/__generated__/All_shirts'


export default function AddShirt() {
  const [valuesShirt, setValuesShirt] = useState<Shirt>(newShirt())
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


  const handleChangeShirt = (eS: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = eS.target
    setValuesShirt({ ...valuesShirt, [name]: value })
  }

  const variablesShirt = {
    name: String(valuesShirt.name),
    size: Number(valuesShirt.size),
    color: String(valuesShirt.color)?.toUpperCase() as ShirtColorType
  }


  const linkClickSubmitHandlerShirt = () => {
    createShirt({
      variables: variablesShirt
    }).finally(
      () => {
        setValuesShirt(newShirt())
      })
  }

  return (
    <form className="form">
      <h1>Shirt</h1>
      <div className="grid-row">
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-username" className="form__label">Name</label>
          <input type="text" id="input-username" value={valuesShirt.name} name="name" className="form__input" placeholder='Name' onChange={handleChangeShirt} />
        </div>
      </div>

      <div className="grid-row">
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-size" className="form__label">Size</label>
          <input
            type="number"
            id="input-size"
            value={valuesShirt.size}
            name="size"
            className="form__input"
            placeholder="Size"
            onChange={handleChangeShirt}
            min="1"
          />
        </div>
      </div>

      <div className="grid-row">
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-color" className="form__label">Color</label>
          <div className="custom-select" id="input-type">
            <select value={valuesShirt.color} name="color" id="input-color" onChange={handleChangeShirt}>
              {colors.map((color, index) => (
                <option key={`${color}-${index}`} value={color}>{color}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="form__button form__button--left">
        <button className="btn btn--primary" type="button" onClick={linkClickSubmitHandlerShirt}>Add</button>
      </div>
    </form>
  )
}
