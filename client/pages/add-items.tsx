import React, { useState } from 'react'
import { MainLayout } from '../components/MainLayout'
import ShirtForm from '../components/shirt/ShirtForm';
import PantsForm from '../components/pants/PantsForm';
import { ProductType } from '../components/__generated__/types'


export default function AddItems() {
  const [type, setType] = useState<ProductType>(ProductType.Pants);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value as ProductType)
  }

  return (
    <MainLayout>
      <section className="add-item">
        <div className="grid-row">
          <div className="grid-row__col grid-row__col--sm-6">
            <label htmlFor="input-type" className="form__label">Type</label>
            <div className="custom-select" id="input-type">
              <select onChange={handleChange} value={type}>
                {Object.keys(ProductType).map((item, index) => (
                  <option key={`${item}-${index}`} value={item}>{item}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {type === ProductType.Pants && (
          <PantsForm />
        )}
        {type === ProductType.Shirt && (
          <ShirtForm />
        )}
      </section>
    </MainLayout >
  )
}
