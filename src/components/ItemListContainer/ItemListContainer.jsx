import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList";
import {getProducts, getProductsByBrand} from "../../data/asyncMockML.js"
import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function ItemListContainer(props) {
    const [products, setProducts] = useState([]);
    const {brandId} = useParams();

    useEffect(() => {
        const asyncFunction = brandId ? getProductsByBrand : getProducts;
        console.log(brandId);
        console.log(asyncFunction);
        asyncFunction(brandId)
        .then((res) => {
            setProducts(res)
        })
        .catch((err) => {
            console.log(err);
        })
    },[brandId])

    return (
        <>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>          
        </>
    )

}

export default ItemListContainer