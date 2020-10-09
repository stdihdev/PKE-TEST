import React from 'react'
import { All_pantsDocument, useAll_pants } from './queries/__generated__/All_pants'
import { useDeletePantsById } from './mutations/__generated__/DeletePantsById'
import { Pants } from '../__generated__/types'

export const PantsList = () => {
  const { loading, error, data } = useAll_pants()
  const [deletePantsById] = useDeletePantsById(
    {
      refetchQueries: [
        {
          query: All_pantsDocument
        }
      ]
    }
  )
  if (loading || !data) return <div>Loading...</div>
  const { all_pants } = data


  const linkClickHandler = (id) => {
    deletePantsById({
      variables: {
        id
      }
    }).finally()
  }

  return (
    <div className="panel">
      <div className="panel_body">
        <table className='table'>
          <caption>Pants</caption>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Color</th>
              <th>W</th>
              <th>L</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {all_pants.map((pants: Pants) => (
              <tr key={pants.id + pants.id}>
                <td>{pants.id}</td>
                <td>{pants?.name}</td>
                <td>{pants.color}</td>
                <td>{pants.W}</td>
                <td>{pants.L}</td>
                <td>
                  <button className="btn btn--delete" onClick={() => linkClickHandler(pants.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
