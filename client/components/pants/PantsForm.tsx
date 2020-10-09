import React, { useState } from 'react'
import Router from 'next/router'
import { Pants, newPants } from '../__generated__/types'
import { useCreatePants } from './mutations/__generated__/CreatePants'
import { All_pantsDocument } from './queries/__generated__/All_pants'


export default function AddPants() {
  const [valuesPants, setValuesPants] = useState<Pants>(newPants())

  const [createPants] = useCreatePants(
    {
      refetchQueries: [
        {
          query: All_pantsDocument
        }
      ]
    }
  )

  const handleChangePants = (eP: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = eP.target
    setValuesPants({ ...valuesPants, [name]: value })
  }

  const variablesPants = {
    name: String(valuesPants.name),
    color: String(valuesPants.color),
    W: Number(valuesPants.W),
    L: Number(valuesPants.L)
  }

  const linkClickSubmitHandlerPants = () => {
    createPants({
      variables: variablesPants
    }).finally(
      () => {
        Router.push('/');
      })
  }

  return (
    <form className="form">
      <h1>Pants</h1>
      <div className="grid-row">
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-username" className="form__label">Name</label>
          <input type="text" id="input-username" value={valuesPants.name} name="name" className="form__input" placeholder='Name' onChange={handleChangePants} />
        </div>
      </div>

      <div className="grid-row">
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-color" className="form__label">Color</label>
          <input type="text" id="input-color" value={valuesPants.color} name="color" className="form__input" placeholder='Color' onChange={handleChangePants} />
        </div>
      </div>

      <div className="grid-row">
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-color" className="form__label">W</label>
          <input
            type="number"
            min='1'
            id="input-w"
            value={valuesPants.W}
            name="W"
            className="form__input"
            placeholder='Width'
            onChange={handleChangePants}
          />
        </div>
        <div className="grid-row__col grid-row__col--sm-6">
          <label htmlFor="input-color" className="form__label">L</label>
          <input
            type="number"
            min='1'
            id="input-l"
            value={valuesPants.L}
            name="L"
            className="form__input"
            placeholder='Length'
            onChange={handleChangePants}
          />
        </div>
      </div>
      <div className="form__button form__button--left">
        <button className="btn btn--primary" type="button" onClick={linkClickSubmitHandlerPants}>Add</button>
      </div>
    </form>
  )
}
