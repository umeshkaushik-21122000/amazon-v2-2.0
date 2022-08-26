import React from 'react'
import Image from 'next/dist/client/image'
import {StarIcon} from "@heroicons/react/solid"
import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { useDispatch } from 'react-redux';
import {addToBasket} from '../slices/basketSlice';

function Product({id,title,price,description,category,image,height,width}) {
    
    const [rating] = useState(Math.floor(((Math.random()*10)%5)+1));
    const [hasPrime]=useState(Math.random()<0.5)
    const dispatch=useDispatch();
        const addItemToBasket=()=>{
            const Product={
                id,
                title,
                price,
                description,
                category,
                image,
                rating,
                hasPrime
            }
            dispatch(addToBasket(Product));
        };
       
  return (
    <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
        <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
        
        <Image
        src={image}
        height={height}
        width={width}
        objectfit="contain"
        />

        <h4 className='my-3'>{title}</h4>

        <div className="flex">
            {Array(rating)
            .fill()
            .map((_,i)=>
            (
                <StarIcon className='h-5 text-yellow-500' />
            )
            )}
            
        </div>
        <p className='text-xs my-2 line-clamp-2'>{description}</p>
        <div className='mb-5'>
            <CurrencyFormat value={price*100} prefix={"₹"} thousandSeparator={true} displayType={'text'} decimalScale={0}/>
        </div>
        
        { hasPrime&&(
        <div className='flex items-center space-x-2 -mt-5'>
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xs text-gray-500'>Free Next-day Delivery</p>
        </div>)}
        <button onClick={addItemToBasket} type="button" class="text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
  <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
  Add to Cart
</button>
    </div>
  )
}

export default Product