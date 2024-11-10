import ProductDetail from "../ProductDetail/ProductDetail"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/asyncMockML";


function ProductDetailContainer() {
    const [product, setProduct]= useState({})
    const {itemId} = useParams()
    console.log(itemId);
    useEffect(() => {
      getProductById(itemId).then(data => {setProduct(data); console.log(data)})
     
    }, [])

  return (
    
    <ProductDetail product= {product} />   
  )
}

export default ProductDetailContainer