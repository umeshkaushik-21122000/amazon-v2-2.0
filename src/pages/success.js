import { CheckCircleIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import React from 'react'
import Header from '../components/header'
import Footer from '../components/Footer'
function Success() {

        const router=useRouter();

  return (
    <div className=' bg-gray-500'>
            
            <Header />

            <main className='max-w-screen-lg mx-auto '>

                <div className='flex flex-col p-36 bg-white'>
                    <div className='flex items-center space-x-2 mb-5'>
                        
                        <CheckCircleIcon className='h-10 text-green-500 '/>

                        <h1 className='text-3xl'>
                                ThankYou , your order has been confirmed!
                        </h1>

                    </div>
                    <p>
                        Thankyou for shopping with Amazon!
                    </p>
                    <button  className='button mt-8 mx-auto '>Go to my orders</button>
                </div>

            </main>

            <Footer />

    </div>
  )
}

export default Success