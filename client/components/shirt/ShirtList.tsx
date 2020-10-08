import { All_shirtsDocument, useAll_shirts } from './queries/__generated__/All_shirts'
import React from 'react'
import { useDeleteShirtById } from './mutations/__generated__/DeleteShirtById'

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
    <section className="main__table_shirt table">
      <table>
        <caption>Shirts</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Color</th>
            <th>Size</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {all_shirts.map(shirt => (
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
        </tbody>
      </table>
    </section>
  )
}