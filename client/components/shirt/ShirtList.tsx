import { All_shirtsDocument, useAll_shirts } from './queries/__generated__/All_shirts'
import React from 'react'
import { useDeleteShirtById } from './mutations/__generated__/DeleteShirtById'
import { Shirt } from '../__generated__/types'

export const ShirtList = () => {
  const { loading, error, data } = useAll_shirts()
  const [deleteShirtById] = useDeleteShirtById(
    {
      refetchQueries: [
        {
          query: All_shirtsDocument
        }
      ]
    }
  )
  if (loading || !data) return <div>Loading...</div>
  const { all_shirts } = data


  const linkClickHandler = (id) => {
    deleteShirtById({
      variables: {
        id
      }
    }).finally()
  }

  return (
    <div className="panel">
      <div className="panel_body">
        <table className='table'>
          <caption>Shirts</caption>
          <thead>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Action</th>
          </thead>
          <tbody>
            {all_shirts.map((shirt: Shirt) => (
              <tr key={shirt.id}>
                <td>{shirt.id}</td>
                <td>{shirt?.name}</td>
                <td>{shirt.color}</td>
                <td>{shirt.size}</td>
                <td>
                  <button className="btn btn--delete" onClick={() => linkClickHandler(shirt.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
