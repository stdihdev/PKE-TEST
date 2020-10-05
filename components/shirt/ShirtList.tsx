import {useAll_shirts} from "./queries/__generated__/All_shirts";

export const ShirtList = () => {
  const {loading, error, data} = useAll_shirts()
  if (loading || !data) return <div>Loading...</div>
  const {All_shirts} = data

  return (
    <section>
      <h3>All Shirts</h3>
      <ul>
        {All_shirts.map(shirt => (
          <li key={shirt.id}>
            <h4>{shirt?.name}</h4>
            <h4>{shirt.color}</h4>
            <h4>{shirt.size}</h4>
          </li>
        ))}
      </ul>
    </section>
  )
}