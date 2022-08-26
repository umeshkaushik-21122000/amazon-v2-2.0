import React from 'react'
import Image from 'next/dist/client/image';
import { StarIcon } from '@heroicons/react/solid';
import CurrencyFormat from 'react-currency-format';
import { addToBasket,removeFromBasket } from '../slices/basketSlice';
import { useDispatch } from 'react-redux';
    function CheckoutProduct({id,title,price,description,category,image,rating,hasPrime}){
  
        const dispatch=useDispatch();
        const addItemtoBasket=()=>{
            const product = {
              id,
              title,
              price,
              rating,
              description,
              category,
              image,
              hasPrime,
            };
            dispatch(addToBasket(product));
        };

        const removeItemfromBasket=()=>{
            dispatch(removeFromBasket({id}));
        }

  return (
    < div className='grid grid-cols-5 '>
    <Image src={image} height={200} width={200} objectFit='contain' />
      <div className='col-span-3 mx-5'>
      <p>{title}</p>
          <div className='flex'>
            {
            Array(rating)
            .fill()
            .map((_,i) => (
              <StarIcon key={i} className='h-5 text-yellow-500 ' />

            ))}

          </div>
          <p className='text-xs my-2 line-clamp-3 '>{description}</p>
          <CurrencyFormat value={price*100} prefix={"₹"} thousandSeparator={true} displayType={'text'} decimalScale={0}/>

          { hasPrime&&(
        <div className='flex items-center space-x-2 -mt-5 '>
            <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
            <p className='text-xl text-gray-500'>Free Next-day Delivery</p>
        </div>)}

      </div>
      <div className='flex flex-col space-y-2 m-auto justify-items-end '>
      <button onClick={addItemtoBasket} type="button" class="text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
  <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
  Add to Cart
</button>
      <button onClick={removeItemfromBasket} type="button" class="text-black bg-yellow-400 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
  <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
  Remove from Cart
</button>
      </div>
      </div>
  )
}

export default CheckoutProduct