import Item from "../Item/Item"

function ItemList( {products} ) {
  return (
    <div className="grid grid-cols-4 gap-4">
        {products.map((prod) => {
            return <Item key={prod.id} product= {prod} />
        })}
    </div>
  )
}

export default ItemList