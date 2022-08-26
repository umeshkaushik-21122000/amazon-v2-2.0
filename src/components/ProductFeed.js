import React from 'react'
import Product from "./Product"
import { useDispatch } from 'react-redux';
import {addResult} from '../slices/searchSlice';
function ProductFeed({products}) {
        
        const dispatch=useDispatch();

        dispatch(addResult(products));  

  return (
    <div className='grid  grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto'>
       
        {products.slice(0,4).map(({id,title,price,description,category,image})=>
        <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                height={300}
                width={200}
        />
        )}

        <img className='md:col-span-full'  src="https://links.papareact.com/dyz" alt="" />

        <div className='md:col-span-2'>
        {products.slice(4,5).map(({id,title,price,description,category,image})=>
        <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                height={400}
                width={400}
        />
        )}
        </div>

        {products.slice(5).map(({id,title,price,description,category,image})=>
        <Product 
                key={id}
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                height={200}
                width={200}
        />
        )}
    </div>
  )
}

export default ProductFeed