import React, { useEffect, useState } from 'react'
import Productitem from '../Productitem/Productitem';
import "./Products.css"

function Products() {

    const [products, setProductsDate] = useState([])
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(res => {
            console.log(res);
            setProductsDate(res);
        })
        .catch((err) => console.log(err));
    }, []);

    const renderProducts = (products) => {
      return products?.map((product) => (
        <Productitem 
         title={product.title} 
         cetegory={product.category}
         description={product.description}
         id={product.id}
         image={product.image}
         price={product.price}
        />
      ));
    };

  
  return (
    <>
    <h1>Products</h1>
    {renderProducts(products)}
    </>
  )
}

export default Products