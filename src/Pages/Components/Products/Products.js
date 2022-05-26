import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const[products,setProducts] = useState([]);

    useEffect( () => {
        fetch("products.json")
        .then(res => res.json())
         .then(data => setProducts(data))
        //  console.log(products);
    }  ,[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-10 mb-10'>
            {
                products.map(product=><Product
                   key={product._id}
                   product={product}
                ></Product> )
            }
        </div>
    );
};

export default Products;